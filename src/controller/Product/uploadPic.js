export const uploadFile = async (file) => {
	const CLOUDINARY_NAME = "truongnqph14659"
	const CLOUDINARY_API = `https://api.cloudinary.com/v1_1/${CLOUDINARY_NAME}/image/upload`
	const CLOUDINARY_PRESET = "tvgpmy7n"

	const formData = new FormData()
	formData.append("file", file)
	formData.append("upload_preset", CLOUDINARY_PRESET)
	// const data = await fetch(CLOUDINARY_API, {
	// 	method: "POST",
	// 	body: formData,
	// })
	// const data_res = await data.json()

	// return data_res
	return axios({
		method: "post",
		url: CLOUDINARY_API,
		data: formData,
	})
}
