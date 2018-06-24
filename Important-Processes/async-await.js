(async function(){
    function logOut(){
        return new Promise((resolve) => {
            setTimeout(function(){
                for (var i = 0; i < 10; i++) {
                    console.log('majom');
                }
                resolve(10);
            }, 2000)
        });
    }

    var resolveAfter2Seconds = function() {
      return new Promise(resolve => {
        setTimeout(function() {
          resolve(20);
          console.log("slow promise is done");
        }, 2000);
      });
    };

    console.log('ide');
    await logOut();
    console.log('oda');
})();