var umi = umi || {};
((umi) => {
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

  function setupUmiStyles(element) {
    updateUmiStyles(element);
    element.onChange(updateUmiStyles);
  }

  function updateUmiStyles(element) {
    if (element.isOk()) {
      element.$.addClass('umi-ok');
      element.$.removeClass('umi-nok');
    } else {
      element.$.removeClass('umi-ok');
      element.$.addClass('umi-nok');
    }
  }

  function fillValues(values, $values, defaultValue) {
    $values.each((index, it) => {
      let $value = $(it);
      $value.text(values[index] || defaultValue);
    });
  }

  class AlignmentRow {
    constructor($row) {
      this.$row = $row;
      this._initializeKeydown();
      this._initializeCells();
      setupUmiStyles(this)
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
      let initial = this.initial();
      let $cells = this._findOrCreateCells();

      fillValues(initial, $cells, '-');
      $cells.each((index, it) => $(it).attr('contenteditable', true) );
    }

    _findOrCreateCells() {
      let cells = () => this.$row.find('.umi-alignment-cell');
      let $cells = cells();
      if ($cells.length === 0) {
        for (let i = 0; i < this.length; i++) {
          this.$row.append('<td class="umi-alignment-cell"></td>')
        }
        return cells();
      } else {
        return $cells;
      }
    }

    onChange(f) {
      this.$row.on('input', function (e) { f(this) }.bind(this));
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

    get $() {
      return this.$row;
    }

    value() {
      return this.$row.text().replace(/[\n ]/g, '');
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

    isOk() {
      return this.isExpectedWord();
    }

    _wordOf(value) {
      return value.replace(/-/g, '')
    }
  }

  class AlignmentTable {
    constructor($table) {
      this.$table = $table;
      this._initializeRows();
      this._initializeResults();
      this._initializeIdentityLevel();
      setupUmiStyles(this);
    }

    _initializeRows() {
      this.$rows = this.$table.find(".umi-alignment-row").toArray().map(it => $(it));
      this.rows = this.$rows.map((it) => new AlignmentRow(it));
    }

    _initializeResults() {
      let $results = this.$table.find('.umi-alignment-result');
      let updateResults = () => {
        let results = checkAlignment(this.rows[0].value(), this.rows[1].value()).map(it => it ? '✅' : '❎');
        fillValues(results, $results);
      };
      this.onChange(updateResults)
      updateResults();
    }

    _initializeIdentityLevel() {
      let $level = this.$table.find('.umi-alignment-identity-level');
      let update = () => {
        let result = identity(this.rows[0].value(), this.rows[1].value())
        $level.text(result);
      };
      this.onChange(update)
      update();
    }

    onChange(f) {
      this.rows.forEach(row => row.onChange(function (_) { f(this) }.bind(this)));
    }

    get $() {
      return this.$table;
    }

    values() {
      return this.rows.map(it => it.value());
    }

    isExpected() {
      return this.rows.every((it) => it.isExpected());
    }

    isOk() {
      return this.isExpected();
    }
  }

  function start() {
    $(() => {
      umi.alignment.tables = [];
      $(".umi-alignment-table").each((_index, table) => {
        umi.alignment.tables.push(new AlignmentTable($(table)));
      })
    })
  }
  umi.alignment = {
    AlignmentTable,
    AlignmentRow,
    start,
    checkAlignment,
    identity,
  };
})(umi);
