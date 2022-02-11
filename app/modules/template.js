
export const template = `
  <div id="wrapper">
    <div id="expand_button"></div>
    <div id="inner_wrapper">

      <div class="section" id="notice-info">
        <h1>Notice Info</h1>
        <div class="area"></div>
      </div>

      <div class="section" id="user-status">
        <h1>User Status</h1>
        <div class="area"></div>
      </div>

      <div class="section" id="actions">
        <h1>Actions</h1>
        <div class="area flex">
          <div onclick="if(typeof top.window.Didomi){top.window.Didomi.notice.show();document.getElementById('expand_button').click()}" class="button-action">Show notice</div>
          <div onclick="if(typeof top.window.Didomi){top.window.Didomi.reset()}" class="button-action">Didomi reset</div>
        </div>
      </div>

    </div>
  </div>
`;
