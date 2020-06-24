function mapFormData(building) {
  let {
    buildingCode,
    buildingName,
    max,
    min,
    avg_percent,
    quantity,
  } = building;
  let form_data = [
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
        label: "Form Data Collection Quantity",
        value: quantity,
        percent: false,
        select: false,
      },
      {
        label: "Building Percentage (Average)",
        value: avg_percent,
        percent: true,
        select: false,
      },
    ],
  ];
  return form_data;
}

export default mapFormData;
