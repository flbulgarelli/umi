<script src="https://code.jquery.com/jquery-3.5.1.min.js" integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>

<div
  class="umi-mumuki-exercise"
  data-guide-slug="mumuki/fundamentos-javascript-funciones-tipos-de-datos"
  data-exercise-id="1">


<input type="text" value="mumuki/fundamentos-javascript-funciones-tipos-de-datos" id="slug">
<input type="number" value="1" id="eid">

<input type="button" id="load" onclick="load()" value="Load!">

<div id="description">
</div>


<pre contenteditable="true" id="content">
  function esPositivo(x) {
    return x > 0;
  }
</pre>

<input type="button" id="go" onclick="go()" value="Go!">
<input type="button" id="offline-go" onclick="offlineGo()" value="Offline Go!">

<div id="test-results">
</div>


<script>


  function content() {
    return $('#content').text();
  }

  function test() {
    return exercise.test;
  }

  function runTests() {
    return fetch("http://127.0.0.1:9292/test", {
        method: 'POST',
        body: JSON.stringify({content: content(), test: test()})
      }).then(it => it.json());
  }

  function runTestsWithMulang() {

  }

  function exercise() {
    const slug = $(`#slug`).val();
    const eid = $(`#eid`).val();

    return fetch(`https://bibliotheca-api.mumuki.io/guides/${slug}`)
            .then(it => it.json())
            .then(it => it.exercises.filter(e => e.id == eid)[0]);
  }

  async function load() {
    exercise = await exercise();
    $('#description').html(marked(exercise.description))
  }

  function renderRunnerRespone(response) {
    const testResultsHtml = response.testResults.map(testResult =>
      `<li>${testResult.title}: ${testResult.status}</li>`
    ).join('\n');
    $('#test-results').html(`<ul>${testResultsHtml}</ul>`);
  }

  function offlineGo() {

  }

  async function go() {
    renderRunnerRespone(await runTests());
  }

  $(() => {
    $('.umi-mumuki-exercise').each((index, it) => {

    })
  })

</script>




