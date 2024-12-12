import Snowfall from "react-snowfall";

type WishesKeys = keyof typeof data.wishes;

function Card() {
    const keys = Object.keys(data.wishes) as WishesKeys[];
    return ( 
        <div className="p-2">
            <Snowfall/>
            {keys.map((item) => (
                <div key={item}>
                <p className="font-bold">{item}</p>
                <div className="border md:w-1/2 w-full mb-6">
                {data.wishes[item].map((wish, index) => (
                    <div className="p-2 rounded-lg mb-2">{wish}</div>
                    
                ))}
                </div>
                </div>
            ))}
        </div>
     );
}

export default Card;

const data ={
    "wishes": {
      "General": [
        "May your Christmas sparkle with moments of love, laughter, and goodwill.",
        "Wishing you peace, joy, and all the best the holiday has to offer.",
        "Merry Christmas! May your days be merry and bright.",
        "May this season bring you endless happiness and love.",
        "Wishing you a holiday filled with joy, cheer, and warm memories.",
        "Merry Christmas and a Happy New Year to you and your loved ones.",
        "May the magic of Christmas fill your home with joy and peace.",
        "May your holiday season be filled with warmth, love, and laughter.",
        "Merry Christmas! Here’s to a joyous and prosperous New Year ahead.",
        "May your Christmas be full of love, laughter, and cherished moments."
      ],
      "Friends": [
        "Wishing you a season full of love, friendship, and cheer.",
        "Friends like you make the holidays even more special. Merry Christmas!",
        "May our friendship grow stronger this holiday season. Merry Christmas!",
        "Thank you for being an amazing friend. Merry Christmas to you and your family!",
        "Here’s to another year of making unforgettable holiday memories together.",
        "Wishing you a Christmas as bright as your smile and as warm as your heart.",
        "May the season bless you with laughter and joy, my dear friend.",
        "Merry Christmas! Let’s make the most of this magical season together.",
        "Friendship is the greatest gift of all. Merry Christmas, my dear friend.",
        "Here’s to more shared laughs and good times in the year ahead. Merry Christmas!"
      ],
      "Family": [
        "Being with family is the best gift of all. Merry Christmas!",
        "Thank you for being my greatest blessing. Merry Christmas, with all my love.",
        "Wishing you a Christmas as special as the love you bring into my life.",
        "May our hearts be full of love and our home be warm with joy this Christmas.",
        "Merry Christmas! Family is the best part of the holiday season.",
        "I’m so grateful for all the love and support you’ve given me. Merry Christmas!",
        "May the season bring us closer together and fill our hearts with love.",
        "Merry Christmas to the best family in the world. I’m so lucky to have you.",
        "Let’s make this holiday season full of love, laughter, and cherished memories.",
        "Christmas is extra special because I get to share it with you."
      ],
      "Kids": [
        "Merry Christmas! May Santa bring you all the gifts you’ve wished for.",
        "The magic of Christmas shines brighter because of you. Have a wonderful holiday!",
        "Wishing you a Christmas full of surprises, laughter, and sweet treats.",
        "Santa’s on his way! Have the merriest Christmas, little one.",
        "May your Christmas be as magical and as fun as you are.",
        "Merry Christmas! Let’s make memories to treasure forever.",
        "Hope you enjoy all the joy and magic this Christmas brings.",
        "Wishing you all the happiness your heart can hold this Christmas.",
        "May your Christmas be filled with fun, laughter, and lots of presents!",
        "You make the holiday season so much brighter. Merry Christmas!"
      ],
      "Religious": [
        "May the light of Christ shine brightly in your heart this Christmas season.",
        "Wishing you a blessed Christmas filled with peace, love, and joy.",
        "May the true meaning of Christmas bring you closer to God.",
        "Merry Christmas! May your faith be renewed and your heart be uplifted.",
        "May God’s blessings be with you and your family this Christmas and always.",
        "May the birth of Jesus bring hope, peace, and love to your home.",
        "Let’s celebrate the gift of God’s love this Christmas. Blessings to you!",
        "Wishing you the blessings of peace, joy, and goodwill this holiday season.",
        "May the spirit of the season draw you closer to His grace and love.",
        "Rejoice! For unto us, a Savior is born. Merry Christmas!"
      ]
    }
  }
  