const { Configuration, OpenAIApi } = require("openai");


const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration);


const generateImage = async (req, res) => {

    try {

        const response = await openai.createImage({
            prompt: req.body.imageName,
            n: 1,
            size: '512x512'
        });

        const imageUrl = response.data.data[0].url;


        res.status(200).json({
            success: true,
            message: 'image generated successfully',
            generatedImageName: req.body.imageName,
            imageUrl: imageUrl
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: 'The requested image cannot be generated',
            imageUrl: null
        });

    }

};


module.exports = generateImage;