import * as ImagePicker from 'expo-image-picker';

const CAMERA_ROLL = 'CAMERA_ROLL';
const CAMERA = 'CAMERA';

const getPermission = async (permissionTypes: string[]) => {
  if (permissionTypes.indexOf(CAMERA) >= 0) {
    await ImagePicker.requestCameraPermissionsAsync();
  }
  if (permissionTypes.indexOf(CAMERA_ROLL) >= 0) {
    await ImagePicker.requestMediaLibraryPermissionsAsync();
  }
};

export const selectFromCameraRoll = async () => {
  await getPermission([CAMERA_ROLL]);
  // ToDo: Klara thetta
};

export const takePhoto = async (): Promise<string> => {
  await getPermission([CAMERA, CAMERA_ROLL]);
  const result = await ImagePicker.launchCameraAsync({
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
    quality: 0.8,
    base64: true,
    aspect: [16, 9],
  });

  if (result.cancelled) { return ''; }

  return result.uri;
};
