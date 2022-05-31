export const fetchImage = async (imageUrl: string): Promise<string> => {
	const res = await fetch(imageUrl);
	const imageBlob = await res.blob();
	const imageObjectURL = URL.createObjectURL(imageBlob);
	return imageObjectURL;
};
