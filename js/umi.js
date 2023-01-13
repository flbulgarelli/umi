var umi=function(t){var e={};function i(n){if(e[n])return e[n].exports;var s=e[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,i),s.l=!0,s.exports}return i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=1)}([function(t,e){function i(t,e){return t.$.data(e)}function n(t,e){return t.$.find(e)}t.exports={readData:i,findChild:n,onceAndOnChange:function(t,e){t.onChange(e),e()},Property:class{constructor(t,e){this.klass=t,this.key=e}value(t){return i(t,this.key)||n(t,this.klass)}}}},function(t,e,i){const n=i(0),s=i(2);t.exports={combiners:n,alignment:s}},function(t,e,i){const{findChild:n,onceAndOnChange:s,readData:r}=i(0);function l(t,e,i=0){let n=0,s=Math.min(t.length,e.length);for(let r=0;r<s;r++)"-"===t[r]||"-"===e[r]?n-=i:t[r]===e[r]&&n++;return n/s}function a(t,e){let i=[];for(let n=0;n<Math.max(t.length,e.length);n++)i.push("-"===t[n]||"-"===e[n]||t[n]===e[n]);return i}function u(t,e,i){let r=n(t,e);s(t,()=>{r.text(o(i()))})}function h(t,e){t.firstValue=e.firstValue(),t.secondValue=e.secondValue(),t.eval()}function o(t){return t?"✅":"❎"}function c(t,e,i=1){let s=()=>n(t,"."+e),r=s();if(0===r.length){for(let n=0;n<t.length;n++)t.$.prepend(`<td colspan="${i}" class="${e}"></td>`);return s()}return r}function C(t,e,i){e.each((e,n)=>{$(n).text(t[e]||i)})}class A{constructor(t){this.value=t}get length(){return this.value.length}word(){return this.value.replace(/-/g,"")}codons(){if(!this.value)return[];let t=[],e=-1;for(let i=0;i<this.length;i++)i%3==0&&(e++,t[e]=""),t[e]=t[e]+this.value[i];return t}translations(t){return this.codons().map(e=>A.TRANSLATIONS[t||"ADN"][e]||"-")}}A.TRANSLATIONS={ARN:{UUU:"F",UUC:"F",UUA:"L",UUG:"L",CUU:"L",CUC:"L",CUA:"L",CUG:"L",AUU:"I",AUC:"I",AUA:"I",AUG:"M",GUU:"V",GUC:"V",GUA:"V",GUG:"V",UCU:"S",UCC:"S",UCA:"S",UCG:"S",CCU:"P",CCC:"P",CCA:"P",CCG:"P",ACU:"T",ACC:"T",ACA:"T",ACG:"T",GCU:"A",GCC:"A",GCA:"A",GCG:"A",UAU:"Y",UAC:"Y",UAA:"X",UAG:"X",CAU:"H",CAC:"H",CAA:"Q",CAG:"Q",AAU:"N",AAC:"N",AAA:"K",AAG:"K",GAU:"D",GAC:"D",GAA:"E",GAG:"E",UGU:"C",UGC:"C",UGA:"X",UGG:"W",CGU:"R",CGC:"R",CGA:"R",CGG:"R",AGU:"S",AGC:"S",AGA:"R",AGG:"R",GGU:"G",GGC:"G",GGA:"G",GGG:"G"},ADN:{TTT:"F",TTC:"F",TTA:"L",TTG:"L",CTT:"L",CTC:"L",CTA:"L",CTG:"L",ATT:"I",ATC:"I",ATA:"I",ATG:"M",GTT:"V",GTC:"V",GTA:"V",GTG:"V",TCT:"S",TCC:"S",TCA:"S",TCG:"S",CCT:"P",CCC:"P",CCA:"P",CCG:"P",ACT:"T",ACC:"T",ACA:"T",ACG:"T",GCT:"A",GCC:"A",GCA:"A",GCG:"A",TAT:"Y",TAC:"Y",TAA:"X",TAG:"X",CAT:"H",CAC:"H",CAA:"Q",CAG:"Q",AAT:"N",AAC:"N",AAA:"K",AAG:"K",GAT:"D",GAC:"D",GAA:"E",GAG:"E",TGT:"C",TGC:"C",TGA:"X",TGG:"W",CGT:"R",CGC:"R",CGA:"R",CGG:"R",AGT:"S",AGC:"S",AGA:"R",AGG:"R",GGT:"G",GGC:"G",GGA:"G",GGG:"G"}};class d{constructor(t){this.$row=t,this._initializeKeydown(),this._initializeCells(),this._initializeWordResult()}_initializeKeydown(){this.$row.on("keydown",function(t){this._handleKeydown(t)}.bind(this))}_handleKeydown(t){t.key.match(/^[A-Za-z\-]$/)?$(t.target).text(""):-1!==[8,46].indexOf(t.keyCode)?($(t.target).text("-"),t.preventDefault()):-1===[37,39,9,18].indexOf(t.keyCode)&&t.preventDefault()}_initializeCells(){this.$cells=c(this,"umi-alignment-cell"),C(this.initial(),this.$cells,"-"),this.$cells.each((t,e)=>$(e).attr("contenteditable",!0))}_initializeWordResult(){u(this,".umi-alignment-word-result",()=>this.isExpectedWord())}onChange(t){this.$row.on("input",function(e){t(this)}.bind(this))}get $(){return this.$row}get length(){if(!this._length){let t=this.expected()||this.initial();this._length=t?t.length:r(this,"alignLength")}return this._length}initial(){return r(this,"alignInitial")?r(this,"alignInitial"):!1!==r(this,"alignInitialize")?this.expectedWord():""}value(){return this.$cells.text().replace(/[\n ]/g,"")}word(){return this._wordOf(this.value())}expected(){return r(this,"alignExpected")}expectedWord(){return this._wordOf(this.expected())}isExpected(){return this.value()===this.expected()}isExpectedWord(){return this.word()===this.expectedWord()}_wordOf(t){return new A(t).word()}}class G{constructor(t){this.$table=t,this._initializeRows(),this._initializeAligmentChecker(),this._initializeCodonTranslators(),this._initializeCodonTranslatorAlignmentChecker()}_initializeRows(){this.$rows=n(this,".umi-alignment-row").toArray().map(t=>$(t)),this.rows=this.$rows.map(t=>new d(t))}_initializeAligmentChecker(){this.alignmentChecker=this._buildDisplay(p,n(this,".umi-alignment-results"),t=>h(t,this))}_initializeCodonTranslators(){this.translators=n(this,".umi-alignment-translations").map((t,e)=>this._buildDisplay(T,$(e),e=>{return i=e,n=this.rows[t].value(),i.value=n,void i.eval();var i,n}))}_initializeCodonTranslatorAlignmentChecker(){this.translators.length&&(this.translationAlignmentChecker=this._buildDisplay(f,n(this,".umi-alignment-translation-results"),t=>h(t,this.translations)))}_buildDisplay(t,e,i){const n=new t(e,this.length);return s(this,()=>i(n)),n}onChange(t){this.rows.forEach(e=>e.onChange((function(e){t()})))}get $(){return this.$table}get length(){return this.rows[0].length}values(){return this.rows.map(t=>t.value())}firstValue(){return this.rows[0].value()}secondValue(){return this.rows[1].value()}get translations(){return{firstValue:()=>this.translators[0].result(),secondValue:()=>this.translators[1].result()}}isExpected(){return this.rows.every(t=>t.isExpected())}}class g{constructor(t){this.$results=t,this._listeners=[]}get $(){return this.$results}_notifyChange(){this._listeners.forEach(t=>t())}onChange(t){this._listeners.push(t)}eval(){const t=this.results;this.results=this._results(),t!==this.results&&this._notifyChange(),this._renderResults()}}class p extends g{constructor(t,e){super(t),this.sequenceLength=e,this._initializeResults(),this._initializeGeneralResults()}_initializeResults(){this.$cells=c(this,"umi-alignment-result",this.colspan)}get length(){return this.sequenceLength}get colspan(){return 1}_initializeGeneralResults(){u(this,".umi-alignment-general-result",()=>this.isExpected())}isExpected(){return this.results&&this.results.every(t=>t)}_results(){return a(this.firstValue,this.secondValue)}_renderResults(){C(this.results.map(o),this.$cells)}}class f extends p{constructor(t,e){super(t,e)}get length(){return super.length/3}get colspan(){return 3}}class T extends g{constructor(t,e){super(t),this.sequenceLength=e,this._initializeResults(),this._initializeGeneralResults()}_initializeResults(){this.$cells=c(this,"umi-alignment-translation",3)}_initializeGeneralResults(){u(this,".umi-alignment-translations-result",()=>this.isExpected())}get length(){return this.sequenceLength/3}get type(){return r(this,"translationType")}expected(){return this.$results.data("translationExpected")}result(){return this.results?this.results.join(""):""}isExpected(){return this.result()===this.expected()}_results(){return new A(this.value).translations(this.type)}_renderResults(){C(this.results,this.$cells)}}class m{constructor(t,e){this.$gapPenalty=t,this.$identityLevel=e,this._initializeGapPenalty()}_initializeGapPenalty(){this.$gapPenalty.change(function(){this.eval()}.bind(this))}gapPenalty(){return this.$gapPenalty.val()}identityLevel(){return l(this.firstValue,this.secondValue,this.gapPenalty())}eval(){this.$identityLevel.text(this.identityLevel())}}class _{constructor(t){this.$card=t,this.table=new G(n(this,".umi-alignment-table")),this._initializeIdentityCalculator(),this._initializeGeneralResults()}_initializeGeneralResults(){u(this,".umi-alignment-card-result",()=>this.table.isExpected())}_initializeIdentityCalculator(){this.identityCalculator=new m(n(this,".umi-alignment-gap-penalty"),n(this,".umi-alignment-identity-level")),s(this.table,()=>{h(this.identityCalculator,this.table)})}onChange(t){this.table.onChange(t)}get $(){return this.$card}}t.exports={AlignmentTable:G,AlignmentRow:d,Sequence:A,start:function(){$(()=>{umi.alignment.cards=[],$(".umi-alignment-card").each((t,e)=>{umi.alignment.cards.push(new _($(e)))})})},checkAlignment:a,identity:l}}]);
//# sourceMappingURL=umi.js.map