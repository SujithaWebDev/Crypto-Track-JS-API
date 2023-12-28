let apiOutput = document.getElementById("title");
      let inputtag = document.getElementById("inputtag");
      let price = document.getElementById("priceid");
      let rank = document.getElementById("rankid");
      let marketCapital = document.getElementById("capitalid");
      let maxsupply = document.getElementById("maxsupplyid");
      let linkoutput = document.getElementById("linkid");
      let btn = document.querySelector(".btn");

      inputtag.addEventListener("click", () => {
        fetch("https://api.coincap.io/v2/assets/")
          .then((anyvar) => anyvar.json())
          .then((output) => {
            console.log(output);
            for (var i = 0; i <= 100; i++) {
              output.data.map((coin) => {
                let newOption = document.createElement("option");
                newOption.innerHTML = coin.id;
                inputtag.appendChild(newOption);
              });
            }
          });
      });
      btn.addEventListener("click", () => {
        fetch("https://api.coincap.io/v2/assets/" + inputtag.value)
          .then((anyvar) => anyvar.json())
          .then((output) => {
            console.log(output);
            apiOutput.innerHTML = output.data.name + " - " + output.data.symbol;
            priceid.innerHTML = parseFloat(
              output.data.priceUsd
            ).toFixed(10);
            rankid.innerHTML = output.data.rank;
            marketCapital.innerHTML = parseFloat(
              output.data.marketCapUsd
            ).toFixed(4);
            maxsupply.innerHTML =
              output.data.maxSupply != null
                ? parseFloat(output.data.maxSupply).toFixed(4)
                : "No Data";
            linkoutput.innerHTML = output.data.explorer;

          });
      });
      linkoutput.addEventListener("click",()=>{
        window.open(linkoutput.innerHTML,'_blank');
      })

      anime({
        targets: ".coinclass",
        translateX: {
          value: 150,
          duration: 800,
        },
        rotate: {
          value: 360,
          duration: 3500,
          easing: "easeInOutSine",
        },
        scale: {
          value: 1.2,
          duration: 3000,
          delay: 800,
          easing: "easeInOutQuart",
        },
        direction: "alternate",
        loop: true,
        delay: 350, // All properties except 'scale' inherit 250ms delay
      });