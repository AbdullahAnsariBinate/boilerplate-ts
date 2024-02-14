let arr = [
  {
    fileCopyUri: null,
    name: "IMG_20240209_141707.jpg",
    size: 144613,
    type: "image/jpeg",
    uri: "content://com.android.externalstorage.documents/document/primary%3APictures%2FIMG_20240209_141707.jpg",
  },
];

arr.forEach((item, index) => {
  console.log("🚀 ~ arr.forEach ~ index:", index)
  let updatedName = `${item?.name?.substring(0, 3)}_${index}`;
  const documentObject = {
    uri: item.uri,
    type: item?.type,
    tempType: "photo",
    showName: updatedName,
    name: item.name,
  };
  console.log("objectfgfg", documentObject);
});
