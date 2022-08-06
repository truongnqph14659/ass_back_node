import Product from "../../model/product";
// import { uploadFile } from "../../controller/Product/uploadPic";

export const add = async (req, res) => {
    try {
        // console.log(req.body);
        // const picture = await uploadFile(req.body.image)
        // console.log(picture.data.url);
        // const dataInput = {
        //     name: req.body.name,
        //     image: picture.src,
        //     price: req.body.price
        // }
        const product = await new Product(req.body).save();
        res.json(product)
    } catch (error) {
        res.status(400).json({ error: 'khong them duoc san pham '})
    }
}