function mapSignalDbmData(signal_dbm) {
  let {
    ssid,
    mac_address,
    chanel,
    dbm,
    download_inside,
    download_outside,
    youtube_cspeed,
    percent,
    note,

  } = signal_dbm;
  let signal_dbm_data = [
    [
      {
        label: "SSID",
        value: ssid,
        percent: false,
      },
      {
        label: "Mac Address",
        value: mac_address,
        percent: false,
      },
      {
        label: "Channel",
        value: chanel,
        percent: false,
      },
      {
        label: "dbm",
        value: dbm,
        percent: false,
      },
    ],
    [
      {
        label: "Download Inside",
        value: download_inside,
        percent: false,
        select: false,
      },
      {
        label: "Download Outside",
        value: download_outside,
        percent: false,
        select: false,
      },
    ],
    [
      {
        label: "Youtube Connection Speed",
        value: youtube_cspeed,
        percent: false,
      },
      {
        label: "Average",
        value: percent,
        percent: true,
      },
    ],
    [
      {
        label: "Note",
        value: note,
        percent: false,
      },
    ],
  ];
  return signal_dbm_data;
}

export default mapSignalDbmData;
