import cartModel from "../model/cartModel";

export const Created = async (req, res) => {
    try {
      const product = await new cartModel(req.body).save();
      res.json(product);
    } catch (error) {
      res.status(400).json({
        error: "Không thêm được sản phẩm",
      });
    }
  };