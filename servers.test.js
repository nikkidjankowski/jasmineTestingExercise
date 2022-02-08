describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = 'Alice';
    serverTbody.innerHTML = '<tr>'
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should not be added', function () {
    serverNameInput.value = '';
    submitServerInfo();
    expect(Object.keys(allServers).length).toEqual(0);
  });

  it('updating', function () {
    serverTbody.innerHTML = '<tr>';
    submitServerInfo();
    updateServerTable();
   
    let curTdList = document.querySelectorAll('#serverTable tbody tr td');

    console.log(curTdList);
    expect(curTdList.length).toEqual(2);
    expect(curTdList[0].innerText).toEqual("Alice");
    expect(curTdList[1].innerText).toEqual('$0.00');
    //expect(curTdList[2].innerText).toEqual('X');
   // expect(curTdList.length).toEqual(3);
  });

  afterEach(function() {
    serverId = 0;
    serverTbody.innerHTML = '';
    allServers = {};
  });
});
