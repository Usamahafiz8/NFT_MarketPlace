const NFT = require('../models/NFT');

exports.createNFT = async (req, res) => {
  const { itemName, website, description, royalties, fileSize, category, properties, price, userAddress, image } = req.body;

  if (!itemName || !userAddress) {
    return res.status(400).json({ message: "Item name and user address are required." });
  }

  const newNFT = new NFT({
    itemName,
    website,
    description,
    royalties,
    fileSize,
    category,
    properties,
    price,
    userAddress,
    imageUrl: image, 
  });

  try {
    const savedNFT = await newNFT.save();
    res.status(201).json(savedNFT);
    console.log('NFT has been created:', savedNFT);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getAllNFTs = async (req, res) => {
  try {
    const nfts = await NFT.find();
    res.json(nfts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
