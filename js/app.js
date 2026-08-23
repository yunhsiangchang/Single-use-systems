
  const bag = document.getElementById("bag");
  const tube = document.getElementById("tube");
  const pumpTube = document.getElementById("pumpTube");
  const pump = document.getElementById("pump");
  const connector = document.getElementById("connector");
  const filter = document.getElementById("filter");
  const reactor = document.getElementById("reactor");

  function manufacturer(product) {

    if (
      product.includes("C-Flex") ||
      product.includes("PharMed") ||
      product.includes("PharmaPure") ||
      product.includes("Tygon") ||
      product.includes("SPT")
    ) return "Saint-Gobain";

    if (
      product.includes("AdvantaFlex") ||
      product.includes("AdvantaSil")
    ) return "AdvantaPure";

    if (
      product.includes("AseptiQuik") ||
      product.includes("MicroCNX")
    ) return "CPC";

    if (product.includes("Meissner"))
      return "Meissner";

    if (product.includes("Sartorius"))
      return "Sartorius";

    if (product.includes("Watson"))
      return "Watson-Marlow";

    if (product.includes("Masterflex"))
      return "Masterflex";

    return "TBD";
  }

  function updateBuilder() {

    document.getElementById("bagLabel").textContent =
      bag.value.replace("Sartorius ", "");

    document.getElementById("tubeLabel").textContent =
      tube.value;

    document.getElementById("pumpLabel").textContent =
      pump.value;

    document.getElementById("pumpTubeLabel").textContent =
      pumpTube.value;

    document.getElementById("connectorLabel").textContent =
      connector.value;

    document.getElementById("filterLabel").textContent =
      filter.value === "No Filter"
        ? "No Filter"
        : "0.2 µm";

    document.getElementById("reactorLabel").textContent =
      reactor.value;

    const components = [
      ["Source Bag", bag.value],
      ["Transfer Tubing", tube.value],
      ["Pump", pump.value],
      ["Pump Tubing", pumpTube.value],
      ["Connector", connector.value],
      ["Filter", filter.value],
      ["Destination", reactor.value]
    ];

    const bom = document.getElementById("bom");

    bom.innerHTML = "";

    components.forEach(component => {

      if (component[1] === "No Filter")
        return;

      const row = document.createElement("tr");

      row.innerHTML = `
        <td>${component[0]}</td>
        <td>${manufacturer(component[1])}</td>
        <td>${component[1]}</td>
        <td>1</td>
      `;

      bom.appendChild(row);

    });

  }

  [
    bag,
    tube,
    pumpTube,
    pump,
    connector,
    filter,
    reactor
  ].forEach(element => {

    element.addEventListener("change", updateBuilder);

  });

  updateBuilder();
