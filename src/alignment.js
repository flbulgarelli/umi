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
    results.push(x[i] === '-' || y[i] === '-' || x[i] === y[i]);
  }
  return results;
}

// ============================
// Generic Components Combiners
// ============================

function findChild(component, klass) {
  return component.$.find(klass);
}

function onceAndOnChange(component, f) {
  component.onChange(f);
  f();
}

function aggregateResult(component, klass, f) {
  let result = findChild(component, klass);
  onceAndOnChange(component, () => {
    result.text(toCheck(f()));
  });
}

function evalWithUpdatedValues(component, table) {
  component.firstValue = table.firstValue();
  component.secondValue = table.secondValue();
  component.eval();
}

function evalWithUpdatedValue(component, value) {
  component.value = value;
  component.eval();
}

// ====================
// Generic UI Renderers
// ====================

function toCheck(value) {
  return value ? '✅' : '❎';
}

function findOrCreateCells(component, klass, colspan = 1) {
  let cells = () => findChild(component, `.${klass}`);
  let $cells = cells();
  if ($cells.length === 0) {
    for (let i = 0; i < component.length; i++) {
      component.$.prepend(`<td colspan="${colspan}" class="${klass}"></td>`)
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

  translations(type) {
    return this.codons().map(codon => Sequence.TRANSLATIONS[type || 'ADN'][codon] || '-');
  }
}

Sequence.TRANSLATIONS = {
  ARN: {
    UUU:"F", UUC:"F", UUA:"L", UUG:"L", CUU:"L", CUC:"L", CUA:"L", CUG:"L",
    AUU:"I", AUC:"I", AUA:"I", AUG:"M", GUU:"V", GUC:"V", GUA:"V", GUG:"V",
    UCU:"S", UCC:"S", UCA:"S", UCG:"S", CCU:"P", CCC:"P", CCA:"P", CCG:"P",
    ACU:"T", ACC:"T", ACA:"T", ACG:"T", GCU:"A", GCC:"A", GCA:"A", GCG:"A",
    UAU:"Y", UAC:"Y", UAA:"X", UAG:"X", CAU:"H", CAC:"H", CAA:"Q", CAG:"Q",
    AAU:"N", AAC:"N", AAA:"K", AAG:"K", GAU:"D", GAC:"D", GAA:"E", GAG:"E",
    UGU:"C", UGC:"C", UGA:"X", UGG:"W", CGU:"R", CGC:"R", CGA:"R", CGG:"R",
    AGU:"S", AGC:"S", AGA:"R", AGG:"R", GGU:"G", GGC:"G", GGA:"G", GGG:"G"
  },
  ADN: {
    TTT:"F", TTC:"F", TTA:"L", TTG:"L", CTT:"L", CTC:"L", CTA:"L", CTG:"L",
    ATT:"I", ATC:"I", ATA:"I", ATG:"M", GTT:"V", GTC:"V", GTA:"V", GTG:"V",
    TCT:"S", TCC:"S", TCA:"S", TCG:"S", CCT:"P", CCC:"P", CCA:"P", CCG:"P",
    ACT:"T", ACC:"T", ACA:"T", ACG:"T", GCT:"A", GCC:"A", GCA:"A", GCG:"A",
    TAT:"Y", TAC:"Y", TAA:"X", TAG:"X", CAT:"H", CAC:"H", CAA:"Q", CAG:"Q",
    AAT:"N", AAC:"N", AAA:"K", AAG:"K", GAT:"D", GAC:"D", GAA:"E", GAG:"E",
    TGT:"C", TGC:"C", TGA:"X", TGG:"W", CGT:"R", CGC:"R", CGA:"R", CGG:"R",
    AGT:"S", AGC:"S", AGA:"R", AGG:"R", GGT:"G", GGC:"G", GGA:"G", GGG:"G"
  }
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
    this.$cells = findOrCreateCells(this, 'umi-alignment-cell');

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
    this._initializeAligmentChecker();
    this._initializeCodonTranslators();
    this._initializeCodonTranslatorAlignmentChecker();
  }

  _initializeRows() {
    this.$rows = findChild(this, ".umi-alignment-row").toArray().map(it => $(it));
    this.rows = this.$rows.map((it) => new AlignmentRow(it));
  }

  _initializeAligmentChecker() {
    this.alignmentChecker = this._buildDisplay(
      AlignmentChecker,
      findChild(this, '.umi-alignment-results'),
      (display) =>  evalWithUpdatedValues(display, this));
  }

  _initializeCodonTranslators() {
    this.translators = findChild(this, '.umi-alignment-translations').map((index, it) =>
      this._buildDisplay(
        CodonTranslator,
        $(it),
        (display) => evalWithUpdatedValue(display, this.rows[index].value())));
  }

  _initializeCodonTranslatorAlignmentChecker() {
    if (this.translators.length) {
      this.translationAlignmentChecker = this._buildDisplay(
        TranslationAlignmentChecker,
        findChild(this, '.umi-alignment-translation-results'),
        (display) => evalWithUpdatedValues(display, this.translations))
    }
  }

  _buildDisplay(f, $, update) {
    const display = new f($, this.length);
    onceAndOnChange(this, () => update(display) );
    return display;
  }

  onChange(f) {
    this.rows.forEach(row => row.onChange(function (_) { f() }));
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

  get translations() {
    return {
      firstValue: () => this.translators[0].result(),
      secondValue: () => this.translators[1].result()
    }
  }

  isExpected() {
    return this.rows.every((it) => it.isExpected());
  }
}

class ResultsDisplay {
  constructor($results) {
    this.$results = $results;
    this._listeners = [];
  }

  get $() {
    return this.$results;
  }

  _notifyChange() {
    this._listeners.forEach(listener => listener());
  }

  onChange(f) {
    this._listeners.push(f);
  }

  eval() {
    const old = this.results;
    this.results = this._results();
    if (old !== this.results) {
      this._notifyChange();
    }
    this._renderResults();
  }
}

class AlignmentChecker extends ResultsDisplay {
  constructor($results, sequenceLength) {
    super($results);
    this.sequenceLength = sequenceLength;
    this._initializeResults();
    this._initializeGeneralResults();
  }

  _initializeResults() {
    this.$cells = findOrCreateCells(this, 'umi-alignment-result', this.colspan);
  }

  get length() {
    return this.sequenceLength;
  }

  get colspan() {
    return 1;
  }

  _initializeGeneralResults() {
    aggregateResult(this, '.umi-alignment-general-result', () => this.isExpected());
  }

  isExpected() {
    return this.results && this.results.every(it => it);
  }

  _results() {
    return checkAlignment(this.firstValue, this.secondValue);
  }

  _renderResults() {
    fillValues(this.results.map(toCheck), this.$cells);
  }
}

class TranslationAlignmentChecker extends AlignmentChecker {
  constructor($results, length) {
    super($results, length)
  }

  get length() {
    return super.length / 3;
  }

  get colspan() {
    return 3;
  }

}

class CodonTranslator extends ResultsDisplay {
  constructor($results, sequenceLength) {
    super($results);
    this.sequenceLength = sequenceLength;
    this._initializeResults();
    this._initializeGeneralResults();
  }

  _initializeResults() {
    this.$cells = findOrCreateCells(this, 'umi-alignment-translation', 3);
  }

  _initializeGeneralResults() {
    aggregateResult(this, '.umi-alignment-translations-result', () => this.isExpected());
  }

  get length() {
    return  this.sequenceLength / 3
  }

  get type() {
    return this.$.data('translationType');
  }

  expected() {
    return this.$results.data('translationExpected');
  }

  result() {
    return this.results ? this.results.join('') : '';
  }

  isExpected() {
    return this.result() === this.expected();
  }

  _results() {
    return new Sequence(this.value).translations(this.type);
  }

  _renderResults() {
    fillValues(this.results, this.$cells);
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
      this.eval();
    }.bind(this));
  }

  gapPenalty() {
    return this.$gapPenalty.val();
  }

  identityLevel() {
    return identity(this.firstValue, this.secondValue, this.gapPenalty());
  }

  eval() {
    this.$identityLevel.text(this.identityLevel());
  }
}

class AlignmentCard {
  constructor($card) {
    this.$card = $card;
    this.table = new AlignmentTable(findChild(this, '.umi-alignment-table'));
    this._initializeIdentityCalculator();
    this._initializeGeneralResults();
  }

  _initializeGeneralResults() {
    aggregateResult(this, '.umi-alignment-card-result', () => this.table.isExpected());
  }

  _initializeIdentityCalculator() {
    this.identityCalculator = new IdentityCalculator(
      findChild(this, '.umi-alignment-gap-penalty'),
      findChild(this, '.umi-alignment-identity-level'));

    onceAndOnChange(this.table, () => {
      evalWithUpdatedValues(this.identityCalculator, this.table);
    });
  }

  onChange(f) {
    this.table.onChange(f);
  }

  get $() {
    return this.$card;
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

module.exports = {
  AlignmentTable,
  AlignmentRow,
  Sequence,
  start,
  checkAlignment,
  identity,
};
