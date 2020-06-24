function mapSignalDbmData(form) {
    let {
        average_percent,
        // max,
        // min,
        building_code,
        building_name,
        detail,
        floor,
        form_id,
        quantity,
        timestamp,
      } = form;
      let signal_dbm_data = [
        [
          {
            label: "Building Code",
            value: building_code,
            percent: false,
          },
          {
            label: "Building Name",
            value: building_name,
            percent: false,
          },
        ],
        [
          {
            label: "Form ID",
            value: form_id,
            percent: false,
          },
          {
            label: "Timestamp",
            value: timestamp,
            percent: false,
          },
        ],
        // [
        //   {
        //     label: "Max of Form Data Collection",
        //     value: max,
        //     percent: true,
        //   },
        //   {
        //     label: "Min of Form Data Collection",
        //     value: min,
        //     percent: true,
        //   },
        // ],
        [
          {
            label: "Floor",
            value: floor,
            percent: false,
          },
          {
            label: "Detail",
            value: detail,
            percent: false,
          },
        ],
        [
          {
            label: "Signal dbm Quantity",
            value: quantity,
            percent: false,
          },
          {
            label: "Form Data Collection Percentage",
            value: average_percent,
            percent: true,
          },
        ],
      ];
      return signal_dbm_data;
}

export default mapSignalDbmData;