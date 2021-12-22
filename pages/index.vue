<template>
  <div class="container">
    <div class="row">
      <div class="column-1">
        <div class="row">
          <div class="column-1"></div>
        </div>
        <div class="row">
          <div class="column-1"></div>
        </div>
      </div>
      <div class="column-1">
        <div class="row">
          <div class="column-1"></div>
        </div>
        <div class="row">
          <div class="column-1"></div>
        </div>
      </div>
      <div class="column-2"></div>
      <div class="column-1">
        <div class="row">
          <div class="column-1"></div>
        </div>
        <div class="row">
          <div class="column-1"></div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="column-2"></div>
      <div class="column-1">
        <div class="row">
          <div class="column-1"></div>
        </div>
        <div class="row">
          <div class="column-1"></div>
        </div>
      </div>
      <div class="column-1">
        <div class="row">
          <div class="column-1"></div>
        </div>
        <div class="row">
          <div class="column-1"></div>
        </div>
      </div>
      <div class="column-1">
        <div class="row">
          <div class="column-1"></div>
        </div>
        <div class="row">
          <div class="column-1"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style>
  * {
    box-sizing: border-box;
  }

  html {
    height: 100%;
  }

  body {
    margin: 0;
  }

  .container {
    margin: 0 auto;
    width: 970px;
  }

  .row {
    width: 100%;
    margin-right: -15px;
    margin-bottom: 20px;
    margin-left: -15px;
  }

  .container > .row:first-child {
    margin-bottom: 0;
  }

  .row:before, .row:after {
    content: " ";
    display: table;
  }

  .row:after {
    clear: both;
  }

  [class*=column-] {
    float: left;
    min-height: 150px;
    padding: 15px;
    position: relative;
  }

  [class*=column-] [class*=column-] {
    background-color: lightgrey;
    background-clip: content-box;
    padding: 0;
    width: 100%;
  }

  [class*=column-] .row {
    margin: 0 0 20px;
  }

  [class*=column-] .row:last-child {
    margin: 0;
  }

  .column-1 {
    width: 20%;
  }

  .column-2 {
    background-color: lightgrey;
    background-clip: content-box;
    height: 350px;
    width: 40%;
  }
</style>
