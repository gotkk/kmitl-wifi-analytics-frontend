function mapBuildingData(building) {
  let {
    buildingCode,
    buildingName,
    max,
    min,
    avg_percent,
    quantity,
  } = building;
  let building_data = [
    [
      {
        label: "Building Code",
        value: buildingCode,
        percent: false,
      },
      {
        label: "Building Name",
        value: buildingName,
        percent: false,
      },
    ],
    [
      {
        label: "Max of Access Point dbm",
        value: max,
        percent: true,
      },
      {
        label: "Min of Access Point dbm",
        value: min,
        percent: true,
      },
    ],
    [
      {
        label: "Average of Access Point dbm",
        value: avg_percent,
        percent: true,
      },
      {
        label: "Form Data Collection Quantity",
        value: quantity,
        percent: false,
      },
    ],
  ];
  return building_data;
}

export default mapBuildingData;
