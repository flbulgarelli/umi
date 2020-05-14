var umi = umi || {};
((umi) => {
  // =====================
  // Generic Bio functions
  // =====================

  function identity(x, y, gapPenalty = 0) {
    let matches = 0;
    let length = Math.min(x.length, y.length)
    for (let i = 0; i < length; i++) {
      if (x[i] === '-' || y[i] === '-') {
        matches -= gapPenalty;
      } else if (x[i] === y[i]) {
        matches++;
      }
    }
    return matches / length;
  }

  function checkAlignment(x, y) {
    let results = []
    for (let i = 0; i < Math.max(x.length, y.length); i++) {
      results.push(
        (x[i] === '-' && y[i] !== '-') ||
        (x[i] !== '-' && y[i] === '-') ||
        (x[i] === y[i] && x[i] !== '-'));
    }
    return results;
  }

  // ============================
  // Generic Components Combiners
  // ============================

  function onceAndOnChange(component, f) {
    component.onChange(f);
    f();
  }

  function aggregateResult(component, klass, f) {
    let result = component.$.find(klass);
    onceAndOnChange(component, () => {
      result.text(toCheck(f()));
    });
  }

  // ====================
  // Generic UI Renderers
  // ====================

  function toCheck(value) {
    return value ? '✅' : '❎';
  }

  function findOrCreateCells(klass, parent, count) {
    let cells = () => parent.find(`.${klass}`);
    let $cells = cells();
    if ($cells.length === 0) {
      for (let i = 0; i < count; i++) {
        parent.prepend(`<td class="${klass}"></td>`)
      }
      return cells();
    } else {
      return $cells;
    }
  }

  function fillValues(values, $values, defaultValue) {
    $values.each((index, it) => {
      let $value = $(it);
      $value.text(values[index] || defaultValue);
    });
  }

  // ==============
  // Bio Components
  // ==============


  class Sequence {
    constructor(value) {
      this.value = value;
    }

    get length() {
      return this.value.length;
    }

    word() {
      return this.value.replace(/-/g, '');
    }

    codons() {
      if (!this.value) {
        return [];
      }
      let codons = [];
      let lastIndex = -1;
      for (let i = 0; i < this.length; i++) {
        if (i % 3 === 0) {
          lastIndex++;
          codons[lastIndex] = '';
        }
        codons[lastIndex] = codons[lastIndex] + this.value[i];

      }
      return codons;
    }

    translations() {
      return this.codons().map(codon => Sequence.TRANSLATIONS[codon]);
    }
  }

  Sequence.TRANSLATIONS = {
      ATA: 'I', ATC: 'I', ATT: 'I', ATG: 'M',
      ACA: 'T', ACC: 'T', ACG: 'T', ACT: 'T',
      AAC: 'N', AAT: 'N', AAA: 'K', AAG: 'K',
      AGC: 'S', AGT: 'S', AGA: 'R', AGG: 'R',
      CTA: 'L', CTC: 'L', CTG: 'L', CTT: 'L',
      CCA: 'P', CCC: 'P', CCG: 'P', CCT: 'P',
      CAC: 'H', CAT: 'H', CAA: 'Q', CAG: 'Q',
      CGA: 'R', CGC: 'R', CGG: 'R', CGT: 'R',
      GTA: 'V', GTC: 'V', GTG: 'V', GTT: 'V',
      GCA: 'A', GCC: 'A', GCG: 'A', GCT: 'A',
      GAC: 'D', GAT: 'D', GAA: 'E', GAG: 'E',
      GGA: 'G', GGC: 'G', GGG: 'G', GGT: 'G',
      TCA: 'S', TCC: 'S', TCG: 'S', TCT: 'S',
      TTC: 'F', TTT: 'F', TTA: 'L', TTG: 'L',
      TAC: 'Y', TAT: 'Y', TGG: 'W', TGC: 'C',
      TGT: 'C', TAA: 'STOP', TAG: 'STOP', TGA: 'STOP'
  }

  // =============
  // UI Components
  // =============

  class AlignmentRow {
    constructor($row) {
      this.$row = $row;
      this._initializeKeydown();
      this._initializeCells();
      this._initializeWordResult();
    }

    _initializeKeydown() {
      this.$row.on('keydown', function(e) {
        this._handleKeydown(e);
      }.bind(this));
    }

    _handleKeydown(e) {
      if (e.key.match(/^[A-Za-z\-]$/)) {
        $(e.target).text('')
      } else if ([8, 46].indexOf(e.keyCode) !== -1) {
        $(e.target).text('-');
        e.preventDefault();
      } else if ([37, 39, 9, 18].indexOf(e.keyCode) === -1) {
        e.preventDefault();
      }
    }

    _initializeCells() {
      this.$cells = findOrCreateCells('umi-alignment-cell', this.$row, this.length);

      fillValues(this.initial(), this.$cells, '-');
      this.$cells.each((index, it) => $(it).attr('contenteditable', true) );
    }

    _initializeWordResult() {
      aggregateResult(this, '.umi-alignment-word-result', () => this.isExpectedWord());
    }

    onChange(f) {
      this.$row.on('input', function (e) { f(this) }.bind(this));
    }

    get $() {
      return this.$row;
    }

    get length() {
      if (!this._length) {
        let initialOrExpected = this.expected() || this.initial();
        if (initialOrExpected) {
          this._length = initialOrExpected.length;
        } else {
          this._length = this.$row.data('alignLength');
        }
      }
      return this._length;
    }

    initial() {
      if (this.$row.data('alignInitial')) {
        return this.$row.data('alignInitial')
      } else if (this.$row.data('alignInitialize') !== false) {
        return this.expectedWord();
      } else {
        return ''
      }
    }

    value() {
      return this.$cells.text().replace(/[\n ]/g, '');
    }

    word() {
      return this._wordOf(this.value());
    }

    expected() {
      return this.$row.data('alignExpected');
    }

    expectedWord() {
      return this._wordOf(this.expected());
    }

    isExpected() {
      return this.value() === this.expected();
    }

    isExpectedWord() {
      return this.word() === this.expectedWord();
    }

    _wordOf(value) {
      return new Sequence(value).word();
    }
  }

  class AlignmentTable {
    constructor($table) {
      this.$table = $table;
      this._initializeRows();
      this._initializeResults();
      this._initializeGeneralResults();
    }

    _initializeRows() {
      this.$rows = this.$table.find(".umi-alignment-row").toArray().map(it => $(it));
      this.rows = this.$rows.map((it) => new AlignmentRow(it));
    }

    _initializeResults() {
      let $results = findOrCreateCells('umi-alignment-result', this.$table.find('.umi-alignment-results'), this.length);

      onceAndOnChange(this, () => {
        let results = checkAlignment(this.firstValue(), this.secondValue()).map(toCheck);
        fillValues(results, $results);
      })
    }

    _initializeGeneralResults() {
      aggregateResult(this, '.umi-alignment-general-result', () => this.isExpected());
    }

    onChange(f) {
      this.rows.forEach(row => row.onChange(function (_) { f(this) }.bind(this)));
    }

    get $() {
      return this.$table;
    }

    get length() {
      return this.rows[0].length;
    }

    values() {
      return this.rows.map(it => it.value());
    }

    firstValue() {
      return this.rows[0].value();
    }

    secondValue() {
      return this.rows[1].value();
    }

    isExpected() {
      return this.rows.every((it) => it.isExpected());
    }
  }

  class IdentityCalculator {
    constructor($gapPenalty, $identityLevel) {
      this.$gapPenalty = $gapPenalty;
      this.$identityLevel = $identityLevel;
      this._initializeGapPenalty();
    }

    _initializeGapPenalty() {
      this.$gapPenalty.change(function () {
        this._eval();
      }.bind(this));
    }

    updateValues(table) {
      this.first = table.firstValue();
      this.second = table.secondValue();
      this._eval();
    }

    gapPenalty() {
      return this.$gapPenalty.val();
    }

    identityLevel() {
      return identity(this.first, this.second, this.gapPenalty());
    }

    _eval() {
      this.$identityLevel.text(this.identityLevel());
    }
  }

  class AlignmentCard {
    constructor($card) {
      this.$card = $card;
      this.table = new AlignmentTable(this.$card.find('.umi-alignment-table'));
      this.identityCalculator = new IdentityCalculator(
        this.$card.find('.umi-alignment-gap-penalty'),
        this.$card.find('.umi-alignment-identity-level'),
      );
      this.$status = this.$card.find('.umi-alignment-status');
      this._initializeIdentityLevel();
    }

    _initializeIdentityLevel() {
      onceAndOnChange(this.table, () => {
        this.identityCalculator.updateValues(this.table);
      });
    }
  }

  // ===========
  // Entry Point
  // ===========

  function start() {
    $(() => {
      umi.alignment.cards = [];
      $(".umi-alignment-card").each((_index, card) => {
        umi.alignment.cards.push(new AlignmentCard($(card)));
      })
    })
  }


  umi.alignment = {
    AlignmentTable,
    AlignmentRow,
    Sequence,
    start,
    checkAlignment,
    identity,
  };
})(umi);
