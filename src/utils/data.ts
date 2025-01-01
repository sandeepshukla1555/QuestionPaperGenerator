interface User {
  email: string;
  password: string;
  token: string;
}

export const LOGIN: User[] = [
  {
    email: "sandeepshukla@gmail.com",
    password: "123sandeep123", // In production, never store plain passwords like this
    token: "1234wgvrgdy73849jn",
  },
  {
    email: "sram@gmail.com",
    password: "123sandeep123",
    token: "4956h4wgvrdy7384jn",
  },
  {
    email: "shyan@gmail.com",
    password: "123sandeep123",
    token: "3489wgvrgdy73849jn",
  },
  {
    email: "rahul@gmail.com",
    password: "123sandeep123",
    token: "sjd23gvrgdy73849jn",
  },
];

//Class Data

interface Subject {
  subject: {
    subject: string;
    chapter: {
      lession: string | number;
      title: string;
      contents: { Paragraph: string; description: string }[];
    }[];
  }[];
  class: string;
  color: string;
}

export const CLASS_SUBJECT: Subject[] = [
  {
    class: "class-1",
    color:
      "linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)",
    subject: [
      {
        subject: "हिंदी",
        chapter: [
          {
            lession: "1",
            title: "किसी का भला हो, तो उसका कुछ अच्छा लौटाना चाहिए",
            contents: [
              {
                Paragraph: "कहानी:",
                description:
                  "बहुत समय पहले की बात है, एक छोटे से गाँव में एक आदमी रहता था, जिसका नाम अर्जुन था। वह एक साधारण किसान था, जो सुबह सूर्योदय से पहले अपने खेतों में काम करता और शाम को घर लौटता। उसकी ज़िन्दगी बहुत ही सादा और मेहनत की थी, लेकिन उसका दिल बहुत बड़ा था।",
              },
              {
                Paragraph: "एक दिन की बात है:",
                description:
                  "एक दिन गाँव के पास एक तेज़ बारिश आई और नदी का पानी बढ़ गया। नदी के किनारे पर एक छोटे से बगीचे वाले व्यक्ति का घर था, जिसका नाम रमेश था। वह व्यक्ति वृद्ध था और घर के पास उसकी कोई मदद करने वाला नहीं था। बारिश में पानी का स्तर इतना बढ़ गया था कि रमेश के घर में पानी घुसने लगा। वह डर से अपनी हालत पर रो रहा था, लेकिन उस समय अर्जुन ने देखा और बिना देर किए नदी के तेज बहाव के बीच से दौड़ते हुए रमेश के घर पहुँचा। अर्जुन ने रमेश को अपनी पीठ पर डाला और उसे नदी के पार सुरक्षित स्थान पर ले आया। वह बहुत थका हुआ था, लेकिन उसने रमेश की मदद की। रमेश ने उसे धन्यवाद कहा, और अर्जुन ने मुस्कुराते हुए कहा, 'भैया, किसी का भला करना ही हमारी असली पहचान है।'",
              },
              {
                Paragraph: "सीख:",
                description:
                  "कुछ सालों बाद, गाँव में एक बड़ी विपत्ति आई। गाँव के पास की नदी में एक बड़े बांध की दीवार टूट गई और गाँव की ओर पानी का बहाव बढ़ने लगा। पूरा गाँव तबाह हो सकता था। गाँव वाले घबराए हुए थे और किसी उपाय को लेकर कुछ सोच नहीं पा रहे थे। तभी अचानक रमेश आया, जो अब बहुत संपन्न और गाँव के बड़े व्यक्ति बन चुका था। उसने सभी गाँव वालों को एक योजना दी और नदी के पानी को नियंत्रित करने के लिए एक बड़ी दीवार बनाने का निर्णय लिया। रमेश ने अर्जुन को धन्यवाद दिया और कहा, 'याद है, उस दिन जब आप मेरी मदद के लिए आए थे, तो आपने मुझे जिंदगी दी थी। आज मेरी बारी है कि मैं आपके गाँव की मदद करूँ।' गाँव के सभी लोग रमेश की मदद से सुरक्षित हो गए और अर्जुन का दिल गर्व से भर गया। उसे एहसास हुआ कि जो भी किसी का भला करता है, उसका भला लौटकर आता है।",
              },
            ],
          },
          {
            lession: "2",
            title: "किसी का भला हो:",
            contents: [
              {
                Paragraph: "कहानी:",
                description:
                  "बहुत समय पहले की बात है, एक छोटे से गाँव में एक आदमी रहता था, जिसका नाम अर्जुन था। वह एक साधारण किसान था, जो सुबह सूर्योदय से पहले अपने खेतों में काम करता और शाम को घर लौटता। उसकी ज़िन्दगी बहुत ही सादा और मेहनत की थी, लेकिन उसका दिल बहुत बड़ा था।",
              },
              {
                Paragraph: "एक दिन की बात है:",
                description:
                  "एक दिन गाँव के पास एक तेज़ बारिश आई और नदी का पानी बढ़ गया। नदी के किनारे पर एक छोटे से बगीचे वाले व्यक्ति का घर था, जिसका नाम रमेश था। वह व्यक्ति वृद्ध था और घर के पास उसकी कोई मदद करने वाला नहीं था। बारिश में पानी का स्तर इतना बढ़ गया था कि रमेश के घर में पानी घुसने लगा। वह डर से अपनी हालत पर रो रहा था, लेकिन उस समय अर्जुन ने देखा और बिना देर किए नदी के तेज बहाव के बीच से दौड़ते हुए रमेश के घर पहुँचा। अर्जुन ने रमेश को अपनी पीठ पर डाला और उसे नदी के पार सुरक्षित स्थान पर ले आया। वह बहुत थका हुआ था, लेकिन उसने रमेश की मदद की। रमेश ने उसे धन्यवाद कहा, और अर्जुन ने मुस्कुराते हुए कहा, 'भैया, किसी का भला करना ही हमारी असली पहचान है।'",
              },
              {
                Paragraph: "सीख:",
                description:
                  "कुछ सालों बाद, गाँव में एक बड़ी विपत्ति आई। गाँव के पास की नदी में एक बड़े बांध की दीवार टूट गई और गाँव की ओर पानी का बहाव बढ़ने लगा। पूरा गाँव तबाह हो सकता था। गाँव वाले घबराए हुए थे और किसी उपाय को लेकर कुछ सोच नहीं पा रहे थे। तभी अचानक रमेश आया, जो अब बहुत संपन्न और गाँव के बड़े व्यक्ति बन चुका था। उसने सभी गाँव वालों को एक योजना दी और नदी के पानी को नियंत्रित करने के लिए एक बड़ी दीवार बनाने का निर्णय लिया। रमेश ने अर्जुन को धन्यवाद दिया और कहा, 'याद है, उस दिन जब आप मेरी मदद के लिए आए थे, तो आपने मुझे जिंदगी दी थी। आज मेरी बारी है कि मैं आपके गाँव की मदद करूँ।' गाँव के सभी लोग रमेश की मदद से सुरक्षित हो गए और अर्जुन का दिल गर्व से भर गया। उसे एहसास हुआ कि जो भी किसी का भला करता है, उसका भला लौटकर आता है।",
              },
            ],
          },
          {
            lession: "3",
            title: "उसका कुछ अच्छा लौटाना चाहिए:",
            contents: [
              {
                Paragraph: "कहानी:",
                description:
                  "बहुत समय पहले की बात है, एक छोटे से गाँव में एक आदमी रहता था, जिसका नाम अर्जुन था। वह एक साधारण किसान था, जो सुबह सूर्योदय से पहले अपने खेतों में काम करता और शाम को घर लौटता। उसकी ज़िन्दगी बहुत ही सादा और मेहनत की थी, लेकिन उसका दिल बहुत बड़ा था।",
              },
              {
                Paragraph: "एक दिन की बात है:",
                description:
                  "एक दिन गाँव के पास एक तेज़ बारिश आई और नदी का पानी बढ़ गया। नदी के किनारे पर एक छोटे से बगीचे वाले व्यक्ति का घर था, जिसका नाम रमेश था। वह व्यक्ति वृद्ध था और घर के पास उसकी कोई मदद करने वाला नहीं था। बारिश में पानी का स्तर इतना बढ़ गया था कि रमेश के घर में पानी घुसने लगा। वह डर से अपनी हालत पर रो रहा था, लेकिन उस समय अर्जुन ने देखा और बिना देर किए नदी के तेज बहाव के बीच से दौड़ते हुए रमेश के घर पहुँचा। अर्जुन ने रमेश को अपनी पीठ पर डाला और उसे नदी के पार सुरक्षित स्थान पर ले आया। वह बहुत थका हुआ था, लेकिन उसने रमेश की मदद की। रमेश ने उसे धन्यवाद कहा, और अर्जुन ने मुस्कुराते हुए कहा, 'भैया, किसी का भला करना ही हमारी असली पहचान है।'",
              },
              {
                Paragraph: "सीख:",
                description:
                  "कुछ सालों बाद, गाँव में एक बड़ी विपत्ति आई। गाँव के पास की नदी में एक बड़े बांध की दीवार टूट गई और गाँव की ओर पानी का बहाव बढ़ने लगा। पूरा गाँव तबाह हो सकता था। गाँव वाले घबराए हुए थे और किसी उपाय को लेकर कुछ सोच नहीं पा रहे थे। तभी अचानक रमेश आया, जो अब बहुत संपन्न और गाँव के बड़े व्यक्ति बन चुका था। उसने सभी गाँव वालों को एक योजना दी और नदी के पानी को नियंत्रित करने के लिए एक बड़ी दीवार बनाने का निर्णय लिया। रमेश ने अर्जुन को धन्यवाद दिया और कहा, 'याद है, उस दिन जब आप मेरी मदद के लिए आए थे, तो आपने मुझे जिंदगी दी थी। आज मेरी बारी है कि मैं आपके गाँव की मदद करूँ।' गाँव के सभी लोग रमेश की मदद से सुरक्षित हो गए और अर्जुन का दिल गर्व से भर गया। उसे एहसास हुआ कि जो भी किसी का भला करता है, उसका भला लौटकर आता है।",
              },
            ],
          },
        ],
      },
      {
        subject: "English",
        chapter: [
          {
            lession: "1",
            title: "The Power of Education:",
            contents: [
              {
                Paragraph: "Once upon a time:",
                description:
                  "Once upon a time, in a small village, there lived a young boy named Mohan. He came from a poor family, but what set him apart was his deep curiosity and passion for learning. Though his life was simple and full of hard work, his greatest desire was to receive an education.",
              },
              {
                Paragraph: "Moral of the Story:",
                description:
                  "However, there was no school in his village. The nearest school was in the city, but Mohan's family didn’t have the money for him to attend. The only book Mohan owned was an old, tattered book that his grandmother had given him. This book was his entire world. Every day, he would read and try to understand the lessons it contained.",
              },
              {
                Paragraph: "Story:",
                description:
                  "One day, a teacher from the city, Mr. Verma, came to the village. He had been hired by a group of villagers who wanted their children to receive an education. When Mohan heard this news, he was overjoyed. He immediately approached his parents, asking them to send him to school.",
              },
            ],
          },
          {
            lession: "2",
            title: "The Power of Education:",
            contents: [
              {
                Paragraph: "Once upon a time:",
                description:
                  "Once upon a time, in a small village, there lived a young boy named Mohan. He came from a poor family, but what set him apart was his deep curiosity and passion for learning. Though his life was simple and full of hard work, his greatest desire was to receive an education.",
              },
              {
                Paragraph: "Moral of the Story:",
                description:
                  "However, there was no school in his village. The nearest school was in the city, but Mohan's family didn’t have the money for him to attend. The only book Mohan owned was an old, tattered book that his grandmother had given him. This book was his entire world. Every day, he would read and try to understand the lessons it contained.",
              },
              {
                Paragraph: "Story:",
                description:
                  "One day, a teacher from the city, Mr. Verma, came to the village. He had been hired by a group of villagers who wanted their children to receive an education. When Mohan heard this news, he was overjoyed. He immediately approached his parents, asking them to send him to school.",
              },
            ],
          },
          {
            lession: "3",
            title: "The Power of Education:",
            contents: [
              {
                Paragraph: "Once upon a time:",
                description:
                  "Once upon a time, in a small village, there lived a young boy named Mohan. He came from a poor family, but what set him apart was his deep curiosity and passion for learning. Though his life was simple and full of hard work, his greatest desire was to receive an education.",
              },
              {
                Paragraph: "Moral of the Story:",
                description:
                  "However, there was no school in his village. The nearest school was in the city, but Mohan's family didn’t have the money for him to attend. The only book Mohan owned was an old, tattered book that his grandmother had given him. This book was his entire world. Every day, he would read and try to understand the lessons it contained.",
              },
              {
                Paragraph: "Story:",
                description:
                  "One day, a teacher from the city, Mr. Verma, came to the village. He had been hired by a group of villagers who wanted their children to receive an education. When Mohan heard this news, he was overjoyed. He immediately approached his parents, asking them to send him to school.",
              },
            ],
          },
        ],
      },
      {
        subject: "Geography",
        chapter: [
          {
            lession: "1",
            title: "The Power of Education:",
            contents: [
              {
                Paragraph: "Once upon a time:",
                description:
                  "Once upon a time, in a small village, there lived a young boy named Mohan. He came from a poor family, but what set him apart was his deep curiosity and passion for learning. Though his life was simple and full of hard work, his greatest desire was to receive an education.",
              },
              {
                Paragraph: "Moral of the Story:",
                description:
                  "However, there was no school in his village. The nearest school was in the city, but Mohan's family didn’t have the money for him to attend. The only book Mohan owned was an old, tattered book that his grandmother had given him. This book was his entire world. Every day, he would read and try to understand the lessons it contained.",
              },
              {
                Paragraph: "Story:",
                description:
                  "One day, a teacher from the city, Mr. Verma, came to the village. He had been hired by a group of villagers who wanted their children to receive an education. When Mohan heard this news, he was overjoyed. He immediately approached his parents, asking them to send him to school.",
              },
            ],
          },
        ],
      },
      {
        subject: "Math",
        chapter: [
          {
            lession: "1",
            title: "The Power of Education:",
            contents: [
              {
                Paragraph: "Once upon a time:",
                description:
                  "Once upon a time, in a small village, there lived a young boy named Mohan. He came from a poor family, but what set him apart was his deep curiosity and passion for learning. Though his life was simple and full of hard work, his greatest desire was to receive an education.",
              },
              {
                Paragraph: "Moral of the Story:",
                description:
                  "However, there was no school in his village. The nearest school was in the city, but Mohan's family didn’t have the money for him to attend. The only book Mohan owned was an old, tattered book that his grandmother had given him. This book was his entire world. Every day, he would read and try to understand the lessons it contained.",
              },
              {
                Paragraph: "Story:",
                description:
                  "One day, a teacher from the city, Mr. Verma, came to the village. He had been hired by a group of villagers who wanted their children to receive an education. When Mohan heard this news, he was overjoyed. He immediately approached his parents, asking them to send him to school.",
              },
            ],
          },
        ],
      },
      {
        subject: "Phycology",
        chapter: [
          {
            lession: "1",
            title: "The Power of Education:",
            contents: [
              {
                Paragraph: "Once upon a time:",
                description:
                  "Once upon a time, in a small village, there lived a young boy named Mohan. He came from a poor family, but what set him apart was his deep curiosity and passion for learning. Though his life was simple and full of hard work, his greatest desire was to receive an education.",
              },
              {
                Paragraph: "Moral of the Story:",
                description:
                  "However, there was no school in his village. The nearest school was in the city, but Mohan's family didn’t have the money for him to attend. The only book Mohan owned was an old, tattered book that his grandmother had given him. This book was his entire world. Every day, he would read and try to understand the lessons it contained.",
              },
              {
                Paragraph: "Story:",
                description:
                  "One day, a teacher from the city, Mr. Verma, came to the village. He had been hired by a group of villagers who wanted their children to receive an education. When Mohan heard this news, he was overjoyed. He immediately approached his parents, asking them to send him to school.",
              },
            ],
          },
        ],
      },
      {
        subject: "Art",
        chapter: [
          {
            lession: "1",
            title: "The Power of Education:",
            contents: [
              {
                Paragraph: "Once upon a time:",
                description:
                  "Once upon a time, in a small village, there lived a young boy named Mohan. He came from a poor family, but what set him apart was his deep curiosity and passion for learning. Though his life was simple and full of hard work, his greatest desire was to receive an education.",
              },
              {
                Paragraph: "Moral of the Story:",
                description:
                  "However, there was no school in his village. The nearest school was in the city, but Mohan's family didn’t have the money for him to attend. The only book Mohan owned was an old, tattered book that his grandmother had given him. This book was his entire world. Every day, he would read and try to understand the lessons it contained.",
              },
              {
                Paragraph: "Story:",
                description:
                  "One day, a teacher from the city, Mr. Verma, came to the village. He had been hired by a group of villagers who wanted their children to receive an education. When Mohan heard this news, he was overjoyed. He immediately approached his parents, asking them to send him to school.",
              },
            ],
          },
        ],
      },
      {
        subject: "History",
        chapter: [
          {
            lession: "1",
            title: "The Power of Education:",
            contents: [
              {
                Paragraph: "Once upon a time:",
                description:
                  "Once upon a time, in a small village, there lived a young boy named Mohan. He came from a poor family, but what set him apart was his deep curiosity and passion for learning. Though his life was simple and full of hard work, his greatest desire was to receive an education.",
              },
              {
                Paragraph: "Moral of the Story:",
                description:
                  "However, there was no school in his village. The nearest school was in the city, but Mohan's family didn’t have the money for him to attend. The only book Mohan owned was an old, tattered book that his grandmother had given him. This book was his entire world. Every day, he would read and try to understand the lessons it contained.",
              },
              {
                Paragraph: "Story:",
                description:
                  "One day, a teacher from the city, Mr. Verma, came to the village. He had been hired by a group of villagers who wanted their children to receive an education. When Mohan heard this news, he was overjoyed. He immediately approached his parents, asking them to send him to school.",
              },
            ],
          },
        ],
      },
      {
        subject: "Computer",
        chapter: [
          {
            lession: "1",
            title: "The Power of Education:",
            contents: [
              {
                Paragraph: "Once upon a time:",
                description:
                  "Once upon a time, in a small village, there lived a young boy named Mohan. He came from a poor family, but what set him apart was his deep curiosity and passion for learning. Though his life was simple and full of hard work, his greatest desire was to receive an education.",
              },
              {
                Paragraph: "Moral of the Story:",
                description:
                  "However, there was no school in his village. The nearest school was in the city, but Mohan's family didn’t have the money for him to attend. The only book Mohan owned was an old, tattered book that his grandmother had given him. This book was his entire world. Every day, he would read and try to understand the lessons it contained.",
              },
              {
                Paragraph: "Story:",
                description:
                  "One day, a teacher from the city, Mr. Verma, came to the village. He had been hired by a group of villagers who wanted their children to receive an education. When Mohan heard this news, he was overjoyed. He immediately approached his parents, asking them to send him to school.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    class: "class-2",
    color:
      "linear-gradient(0deg, rgba(195,34,116,1) 0%, rgba(253,100,45,1) 100%)",
    subject: [
      {
        subject: "हिंदी",
        chapter: [
          {
            lession: "1",
            title: "किसी का भला हो, तो उसका कुछ अच्छा लौटाना चाहिए",
            contents: [
              {
                Paragraph: "कहानी:",
                description:
                  "बहुत समय पहले की बात है, एक छोटे से गाँव में एक आदमी रहता था, जिसका नाम अर्जुन था। वह एक साधारण किसान था, जो सुबह सूर्योदय से पहले अपने खेतों में काम करता और शाम को घर लौटता। उसकी ज़िन्दगी बहुत ही सादा और मेहनत की थी, लेकिन उसका दिल बहुत बड़ा था।",
              },
              {
                Paragraph: "एक दिन की बात है:",
                description:
                  "एक दिन गाँव के पास एक तेज़ बारिश आई और नदी का पानी बढ़ गया। नदी के किनारे पर एक छोटे से बगीचे वाले व्यक्ति का घर था, जिसका नाम रमेश था। वह व्यक्ति वृद्ध था और घर के पास उसकी कोई मदद करने वाला नहीं था। बारिश में पानी का स्तर इतना बढ़ गया था कि रमेश के घर में पानी घुसने लगा। वह डर से अपनी हालत पर रो रहा था, लेकिन उस समय अर्जुन ने देखा और बिना देर किए नदी के तेज बहाव के बीच से दौड़ते हुए रमेश के घर पहुँचा। अर्जुन ने रमेश को अपनी पीठ पर डाला और उसे नदी के पार सुरक्षित स्थान पर ले आया। वह बहुत थका हुआ था, लेकिन उसने रमेश की मदद की। रमेश ने उसे धन्यवाद कहा, और अर्जुन ने मुस्कुराते हुए कहा, 'भैया, किसी का भला करना ही हमारी असली पहचान है।'",
              },
              {
                Paragraph: "सीख:",
                description:
                  "कुछ सालों बाद, गाँव में एक बड़ी विपत्ति आई। गाँव के पास की नदी में एक बड़े बांध की दीवार टूट गई और गाँव की ओर पानी का बहाव बढ़ने लगा। पूरा गाँव तबाह हो सकता था। गाँव वाले घबराए हुए थे और किसी उपाय को लेकर कुछ सोच नहीं पा रहे थे। तभी अचानक रमेश आया, जो अब बहुत संपन्न और गाँव के बड़े व्यक्ति बन चुका था। उसने सभी गाँव वालों को एक योजना दी और नदी के पानी को नियंत्रित करने के लिए एक बड़ी दीवार बनाने का निर्णय लिया। रमेश ने अर्जुन को धन्यवाद दिया और कहा, 'याद है, उस दिन जब आप मेरी मदद के लिए आए थे, तो आपने मुझे जिंदगी दी थी। आज मेरी बारी है कि मैं आपके गाँव की मदद करूँ।' गाँव के सभी लोग रमेश की मदद से सुरक्षित हो गए और अर्जुन का दिल गर्व से भर गया। उसे एहसास हुआ कि जो भी किसी का भला करता है, उसका भला लौटकर आता है।",
              },
            ],
          },
        ],
      },
      {
        subject: "English",
        chapter: [
          {
            lession: "1",
            title: "The Power of Education:",
            contents: [
              {
                Paragraph: "Once upon a time:",
                description:
                  "Once upon a time, in a small village, there lived a young boy named Mohan. He came from a poor family, but what set him apart was his deep curiosity and passion for learning. Though his life was simple and full of hard work, his greatest desire was to receive an education.",
              },
              {
                Paragraph: "Moral of the Story:",
                description:
                  "However, there was no school in his village. The nearest school was in the city, but Mohan's family didn’t have the money for him to attend. The only book Mohan owned was an old, tattered book that his grandmother had given him. This book was his entire world. Every day, he would read and try to understand the lessons it contained.",
              },
              {
                Paragraph: "Story:",
                description:
                  "One day, a teacher from the city, Mr. Verma, came to the village. He had been hired by a group of villagers who wanted their children to receive an education. When Mohan heard this news, he was overjoyed. He immediately approached his parents, asking them to send him to school.",
              },
            ],
          },
        ],
      },
      {
        subject: "Geography",
        chapter: [
          {
            lession: "1",
            title: "The Power of Education:",
            contents: [
              {
                Paragraph: "Once upon a time:",
                description:
                  "Once upon a time, in a small village, there lived a young boy named Mohan. He came from a poor family, but what set him apart was his deep curiosity and passion for learning. Though his life was simple and full of hard work, his greatest desire was to receive an education.",
              },
              {
                Paragraph: "Moral of the Story:",
                description:
                  "However, there was no school in his village. The nearest school was in the city, but Mohan's family didn’t have the money for him to attend. The only book Mohan owned was an old, tattered book that his grandmother had given him. This book was his entire world. Every day, he would read and try to understand the lessons it contained.",
              },
              {
                Paragraph: "Story:",
                description:
                  "One day, a teacher from the city, Mr. Verma, came to the village. He had been hired by a group of villagers who wanted their children to receive an education. When Mohan heard this news, he was overjoyed. He immediately approached his parents, asking them to send him to school.",
              },
            ],
          },
        ],
      },
      {
        subject: "Math",
        chapter: [
          {
            lession: "1",
            title: "The Power of Education:",
            contents: [
              {
                Paragraph: "Once upon a time:",
                description:
                  "Once upon a time, in a small village, there lived a young boy named Mohan. He came from a poor family, but what set him apart was his deep curiosity and passion for learning. Though his life was simple and full of hard work, his greatest desire was to receive an education.",
              },
              {
                Paragraph: "Moral of the Story:",
                description:
                  "However, there was no school in his village. The nearest school was in the city, but Mohan's family didn’t have the money for him to attend. The only book Mohan owned was an old, tattered book that his grandmother had given him. This book was his entire world. Every day, he would read and try to understand the lessons it contained.",
              },
              {
                Paragraph: "Story:",
                description:
                  "One day, a teacher from the city, Mr. Verma, came to the village. He had been hired by a group of villagers who wanted their children to receive an education. When Mohan heard this news, he was overjoyed. He immediately approached his parents, asking them to send him to school.",
              },
            ],
          },
        ],
      },
      {
        subject: "Phycology",
        chapter: [
          {
            lession: "1",
            title: "The Power of Education:",
            contents: [
              {
                Paragraph: "Once upon a time:",
                description:
                  "Once upon a time, in a small village, there lived a young boy named Mohan. He came from a poor family, but what set him apart was his deep curiosity and passion for learning. Though his life was simple and full of hard work, his greatest desire was to receive an education.",
              },
              {
                Paragraph: "Moral of the Story:",
                description:
                  "However, there was no school in his village. The nearest school was in the city, but Mohan's family didn’t have the money for him to attend. The only book Mohan owned was an old, tattered book that his grandmother had given him. This book was his entire world. Every day, he would read and try to understand the lessons it contained.",
              },
              {
                Paragraph: "Story:",
                description:
                  "One day, a teacher from the city, Mr. Verma, came to the village. He had been hired by a group of villagers who wanted their children to receive an education. When Mohan heard this news, he was overjoyed. He immediately approached his parents, asking them to send him to school.",
              },
            ],
          },
        ],
      },
      {
        subject: "Art",
        chapter: [
          {
            lession: "1",
            title: "The Power of Education:",
            contents: [
              {
                Paragraph: "Once upon a time:",
                description:
                  "Once upon a time, in a small village, there lived a young boy named Mohan. He came from a poor family, but what set him apart was his deep curiosity and passion for learning. Though his life was simple and full of hard work, his greatest desire was to receive an education.",
              },
              {
                Paragraph: "Moral of the Story:",
                description:
                  "However, there was no school in his village. The nearest school was in the city, but Mohan's family didn’t have the money for him to attend. The only book Mohan owned was an old, tattered book that his grandmother had given him. This book was his entire world. Every day, he would read and try to understand the lessons it contained.",
              },
              {
                Paragraph: "Story:",
                description:
                  "One day, a teacher from the city, Mr. Verma, came to the village. He had been hired by a group of villagers who wanted their children to receive an education. When Mohan heard this news, he was overjoyed. He immediately approached his parents, asking them to send him to school.",
              },
            ],
          },
        ],
      },
      {
        subject: "History",
        chapter: [
          {
            lession: "1",
            title: "The Power of Education:",
            contents: [
              {
                Paragraph: "Once upon a time:",
                description:
                  "Once upon a time, in a small village, there lived a young boy named Mohan. He came from a poor family, but what set him apart was his deep curiosity and passion for learning. Though his life was simple and full of hard work, his greatest desire was to receive an education.",
              },
              {
                Paragraph: "Moral of the Story:",
                description:
                  "However, there was no school in his village. The nearest school was in the city, but Mohan's family didn’t have the money for him to attend. The only book Mohan owned was an old, tattered book that his grandmother had given him. This book was his entire world. Every day, he would read and try to understand the lessons it contained.",
              },
              {
                Paragraph: "Story:",
                description:
                  "One day, a teacher from the city, Mr. Verma, came to the village. He had been hired by a group of villagers who wanted their children to receive an education. When Mohan heard this news, he was overjoyed. He immediately approached his parents, asking them to send him to school.",
              },
            ],
          },
        ],
      },
      {
        subject: "Computer",
        chapter: [
          {
            lession: "1",
            title: "The Power of Education:",
            contents: [
              {
                Paragraph: "Once upon a time:",
                description:
                  "Once upon a time, in a small village, there lived a young boy named Mohan. He came from a poor family, but what set him apart was his deep curiosity and passion for learning. Though his life was simple and full of hard work, his greatest desire was to receive an education.",
              },
              {
                Paragraph: "Moral of the Story:",
                description:
                  "However, there was no school in his village. The nearest school was in the city, but Mohan's family didn’t have the money for him to attend. The only book Mohan owned was an old, tattered book that his grandmother had given him. This book was his entire world. Every day, he would read and try to understand the lessons it contained.",
              },
              {
                Paragraph: "Story:",
                description:
                  "One day, a teacher from the city, Mr. Verma, came to the village. He had been hired by a group of villagers who wanted their children to receive an education. When Mohan heard this news, he was overjoyed. He immediately approached his parents, asking them to send him to school.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    class: "class-3",
    color:
      "linear-gradient(0deg, rgba(34,178,195,1) 0%, rgba(77,253,45,1) 100%)",
    subject: [
      {
        subject: "हिंदी",
        chapter: [
          {
            lession: "1",
            title: "किसी का भला हो, तो उसका कुछ अच्छा लौटाना चाहिए",
            contents: [
              {
                Paragraph: "कहानी:",
                description:
                  "बहुत समय पहले की बात है, एक छोटे से गाँव में एक आदमी रहता था, जिसका नाम अर्जुन था। वह एक साधारण किसान था, जो सुबह सूर्योदय से पहले अपने खेतों में काम करता और शाम को घर लौटता। उसकी ज़िन्दगी बहुत ही सादा और मेहनत की थी, लेकिन उसका दिल बहुत बड़ा था।",
              },
              {
                Paragraph: "एक दिन की बात है:",
                description:
                  "एक दिन गाँव के पास एक तेज़ बारिश आई और नदी का पानी बढ़ गया। नदी के किनारे पर एक छोटे से बगीचे वाले व्यक्ति का घर था, जिसका नाम रमेश था। वह व्यक्ति वृद्ध था और घर के पास उसकी कोई मदद करने वाला नहीं था। बारिश में पानी का स्तर इतना बढ़ गया था कि रमेश के घर में पानी घुसने लगा। वह डर से अपनी हालत पर रो रहा था, लेकिन उस समय अर्जुन ने देखा और बिना देर किए नदी के तेज बहाव के बीच से दौड़ते हुए रमेश के घर पहुँचा। अर्जुन ने रमेश को अपनी पीठ पर डाला और उसे नदी के पार सुरक्षित स्थान पर ले आया। वह बहुत थका हुआ था, लेकिन उसने रमेश की मदद की। रमेश ने उसे धन्यवाद कहा, और अर्जुन ने मुस्कुराते हुए कहा, 'भैया, किसी का भला करना ही हमारी असली पहचान है।'",
              },
              {
                Paragraph: "सीख:",
                description:
                  "कुछ सालों बाद, गाँव में एक बड़ी विपत्ति आई। गाँव के पास की नदी में एक बड़े बांध की दीवार टूट गई और गाँव की ओर पानी का बहाव बढ़ने लगा। पूरा गाँव तबाह हो सकता था। गाँव वाले घबराए हुए थे और किसी उपाय को लेकर कुछ सोच नहीं पा रहे थे। तभी अचानक रमेश आया, जो अब बहुत संपन्न और गाँव के बड़े व्यक्ति बन चुका था। उसने सभी गाँव वालों को एक योजना दी और नदी के पानी को नियंत्रित करने के लिए एक बड़ी दीवार बनाने का निर्णय लिया। रमेश ने अर्जुन को धन्यवाद दिया और कहा, 'याद है, उस दिन जब आप मेरी मदद के लिए आए थे, तो आपने मुझे जिंदगी दी थी। आज मेरी बारी है कि मैं आपके गाँव की मदद करूँ।' गाँव के सभी लोग रमेश की मदद से सुरक्षित हो गए और अर्जुन का दिल गर्व से भर गया। उसे एहसास हुआ कि जो भी किसी का भला करता है, उसका भला लौटकर आता है।",
              },
            ],
          },
        ],
      },
      {
        subject: "English",
        chapter: [
          {
            lession: "1",
            title: "The Power of Education:",
            contents: [
              {
                Paragraph: "Once upon a time:",
                description:
                  "Once upon a time, in a small village, there lived a young boy named Mohan. He came from a poor family, but what set him apart was his deep curiosity and passion for learning. Though his life was simple and full of hard work, his greatest desire was to receive an education.",
              },
              {
                Paragraph: "Moral of the Story:",
                description:
                  "However, there was no school in his village. The nearest school was in the city, but Mohan's family didn’t have the money for him to attend. The only book Mohan owned was an old, tattered book that his grandmother had given him. This book was his entire world. Every day, he would read and try to understand the lessons it contained.",
              },
              {
                Paragraph: "Story:",
                description:
                  "One day, a teacher from the city, Mr. Verma, came to the village. He had been hired by a group of villagers who wanted their children to receive an education. When Mohan heard this news, he was overjoyed. He immediately approached his parents, asking them to send him to school.",
              },
            ],
          },
        ],
      },
      {
        subject: "Geography",
        chapter: [
          {
            lession: "1",
            title: "The Power of Education:",
            contents: [
              {
                Paragraph: "Once upon a time:",
                description:
                  "Once upon a time, in a small village, there lived a young boy named Mohan. He came from a poor family, but what set him apart was his deep curiosity and passion for learning. Though his life was simple and full of hard work, his greatest desire was to receive an education.",
              },
              {
                Paragraph: "Moral of the Story:",
                description:
                  "However, there was no school in his village. The nearest school was in the city, but Mohan's family didn’t have the money for him to attend. The only book Mohan owned was an old, tattered book that his grandmother had given him. This book was his entire world. Every day, he would read and try to understand the lessons it contained.",
              },
              {
                Paragraph: "Story:",
                description:
                  "One day, a teacher from the city, Mr. Verma, came to the village. He had been hired by a group of villagers who wanted their children to receive an education. When Mohan heard this news, he was overjoyed. He immediately approached his parents, asking them to send him to school.",
              },
            ],
          },
        ],
      },
      {
        subject: "Math",
        chapter: [
          {
            lession: "1",
            title: "The Power of Education:",
            contents: [
              {
                Paragraph: "Once upon a time:",
                description:
                  "Once upon a time, in a small village, there lived a young boy named Mohan. He came from a poor family, but what set him apart was his deep curiosity and passion for learning. Though his life was simple and full of hard work, his greatest desire was to receive an education.",
              },
              {
                Paragraph: "Moral of the Story:",
                description:
                  "However, there was no school in his village. The nearest school was in the city, but Mohan's family didn’t have the money for him to attend. The only book Mohan owned was an old, tattered book that his grandmother had given him. This book was his entire world. Every day, he would read and try to understand the lessons it contained.",
              },
              {
                Paragraph: "Story:",
                description:
                  "One day, a teacher from the city, Mr. Verma, came to the village. He had been hired by a group of villagers who wanted their children to receive an education. When Mohan heard this news, he was overjoyed. He immediately approached his parents, asking them to send him to school.",
              },
            ],
          },
        ],
      },
      {
        subject: "Phycology",
        chapter: [
          {
            lession: "1",
            title: "The Power of Education:",
            contents: [
              {
                Paragraph: "Once upon a time:",
                description:
                  "Once upon a time, in a small village, there lived a young boy named Mohan. He came from a poor family, but what set him apart was his deep curiosity and passion for learning. Though his life was simple and full of hard work, his greatest desire was to receive an education.",
              },
              {
                Paragraph: "Moral of the Story:",
                description:
                  "However, there was no school in his village. The nearest school was in the city, but Mohan's family didn’t have the money for him to attend. The only book Mohan owned was an old, tattered book that his grandmother had given him. This book was his entire world. Every day, he would read and try to understand the lessons it contained.",
              },
              {
                Paragraph: "Story:",
                description:
                  "One day, a teacher from the city, Mr. Verma, came to the village. He had been hired by a group of villagers who wanted their children to receive an education. When Mohan heard this news, he was overjoyed. He immediately approached his parents, asking them to send him to school.",
              },
            ],
          },
        ],
      },
      {
        subject: "Art",
        chapter: [
          {
            lession: "1",
            title: "The Power of Education:",
            contents: [
              {
                Paragraph: "Once upon a time:",
                description:
                  "Once upon a time, in a small village, there lived a young boy named Mohan. He came from a poor family, but what set him apart was his deep curiosity and passion for learning. Though his life was simple and full of hard work, his greatest desire was to receive an education.",
              },
              {
                Paragraph: "Moral of the Story:",
                description:
                  "However, there was no school in his village. The nearest school was in the city, but Mohan's family didn’t have the money for him to attend. The only book Mohan owned was an old, tattered book that his grandmother had given him. This book was his entire world. Every day, he would read and try to understand the lessons it contained.",
              },
              {
                Paragraph: "Story:",
                description:
                  "One day, a teacher from the city, Mr. Verma, came to the village. He had been hired by a group of villagers who wanted their children to receive an education. When Mohan heard this news, he was overjoyed. He immediately approached his parents, asking them to send him to school.",
              },
            ],
          },
        ],
      },
      {
        subject: "History",
        chapter: [
          {
            lession: "1",
            title: "The Power of Education:",
            contents: [
              {
                Paragraph: "Once upon a time:",
                description:
                  "Once upon a time, in a small village, there lived a young boy named Mohan. He came from a poor family, but what set him apart was his deep curiosity and passion for learning. Though his life was simple and full of hard work, his greatest desire was to receive an education.",
              },
              {
                Paragraph: "Moral of the Story:",
                description:
                  "However, there was no school in his village. The nearest school was in the city, but Mohan's family didn’t have the money for him to attend. The only book Mohan owned was an old, tattered book that his grandmother had given him. This book was his entire world. Every day, he would read and try to understand the lessons it contained.",
              },
              {
                Paragraph: "Story:",
                description:
                  "One day, a teacher from the city, Mr. Verma, came to the village. He had been hired by a group of villagers who wanted their children to receive an education. When Mohan heard this news, he was overjoyed. He immediately approached his parents, asking them to send him to school.",
              },
            ],
          },
        ],
      },
      {
        subject: "Computer",
        chapter: [
          {
            lession: "1",
            title: "The Power of Education:",
            contents: [
              {
                Paragraph: "Once upon a time:",
                description:
                  "Once upon a time, in a small village, there lived a young boy named Mohan. He came from a poor family, but what set him apart was his deep curiosity and passion for learning. Though his life was simple and full of hard work, his greatest desire was to receive an education.",
              },
              {
                Paragraph: "Moral of the Story:",
                description:
                  "However, there was no school in his village. The nearest school was in the city, but Mohan's family didn’t have the money for him to attend. The only book Mohan owned was an old, tattered book that his grandmother had given him. This book was his entire world. Every day, he would read and try to understand the lessons it contained.",
              },
              {
                Paragraph: "Story:",
                description:
                  "One day, a teacher from the city, Mr. Verma, came to the village. He had been hired by a group of villagers who wanted their children to receive an education. When Mohan heard this news, he was overjoyed. He immediately approached his parents, asking them to send him to school.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    class: "class-4",
    color:
      "linear-gradient(0deg, rgba(195,142,34,1) 0%, rgba(253,45,45,1) 100%)",
    subject: [
      {
        subject: "हिंदी",
        chapter: [
          {
            lession: "1",
            title: "किसी का भला हो, तो उसका कुछ अच्छा लौटाना चाहिए",
            contents: [
              {
                Paragraph: "कहानी:",
                description:
                  "बहुत समय पहले की बात है, एक छोटे से गाँव में एक आदमी रहता था, जिसका नाम अर्जुन था। वह एक साधारण किसान था, जो सुबह सूर्योदय से पहले अपने खेतों में काम करता और शाम को घर लौटता। उसकी ज़िन्दगी बहुत ही सादा और मेहनत की थी, लेकिन उसका दिल बहुत बड़ा था।",
              },
              {
                Paragraph: "एक दिन की बात है:",
                description:
                  "एक दिन गाँव के पास एक तेज़ बारिश आई और नदी का पानी बढ़ गया। नदी के किनारे पर एक छोटे से बगीचे वाले व्यक्ति का घर था, जिसका नाम रमेश था। वह व्यक्ति वृद्ध था और घर के पास उसकी कोई मदद करने वाला नहीं था। बारिश में पानी का स्तर इतना बढ़ गया था कि रमेश के घर में पानी घुसने लगा। वह डर से अपनी हालत पर रो रहा था, लेकिन उस समय अर्जुन ने देखा और बिना देर किए नदी के तेज बहाव के बीच से दौड़ते हुए रमेश के घर पहुँचा। अर्जुन ने रमेश को अपनी पीठ पर डाला और उसे नदी के पार सुरक्षित स्थान पर ले आया। वह बहुत थका हुआ था, लेकिन उसने रमेश की मदद की। रमेश ने उसे धन्यवाद कहा, और अर्जुन ने मुस्कुराते हुए कहा, 'भैया, किसी का भला करना ही हमारी असली पहचान है।'",
              },
              {
                Paragraph: "सीख:",
                description:
                  "कुछ सालों बाद, गाँव में एक बड़ी विपत्ति आई। गाँव के पास की नदी में एक बड़े बांध की दीवार टूट गई और गाँव की ओर पानी का बहाव बढ़ने लगा। पूरा गाँव तबाह हो सकता था। गाँव वाले घबराए हुए थे और किसी उपाय को लेकर कुछ सोच नहीं पा रहे थे। तभी अचानक रमेश आया, जो अब बहुत संपन्न और गाँव के बड़े व्यक्ति बन चुका था। उसने सभी गाँव वालों को एक योजना दी और नदी के पानी को नियंत्रित करने के लिए एक बड़ी दीवार बनाने का निर्णय लिया। रमेश ने अर्जुन को धन्यवाद दिया और कहा, 'याद है, उस दिन जब आप मेरी मदद के लिए आए थे, तो आपने मुझे जिंदगी दी थी। आज मेरी बारी है कि मैं आपके गाँव की मदद करूँ।' गाँव के सभी लोग रमेश की मदद से सुरक्षित हो गए और अर्जुन का दिल गर्व से भर गया। उसे एहसास हुआ कि जो भी किसी का भला करता है, उसका भला लौटकर आता है।",
              },
            ],
          },
        ],
      },
      {
        subject: "English",
        chapter: [
          {
            lession: "1",
            title: "The Power of Education:",
            contents: [
              {
                Paragraph: "Once upon a time:",
                description:
                  "Once upon a time, in a small village, there lived a young boy named Mohan. He came from a poor family, but what set him apart was his deep curiosity and passion for learning. Though his life was simple and full of hard work, his greatest desire was to receive an education.",
              },
              {
                Paragraph: "Moral of the Story:",
                description:
                  "However, there was no school in his village. The nearest school was in the city, but Mohan's family didn’t have the money for him to attend. The only book Mohan owned was an old, tattered book that his grandmother had given him. This book was his entire world. Every day, he would read and try to understand the lessons it contained.",
              },
              {
                Paragraph: "Story:",
                description:
                  "One day, a teacher from the city, Mr. Verma, came to the village. He had been hired by a group of villagers who wanted their children to receive an education. When Mohan heard this news, he was overjoyed. He immediately approached his parents, asking them to send him to school.",
              },
            ],
          },
        ],
      },
      {
        subject: "Geography",
        chapter: [
          {
            lession: "1",
            title: "The Power of Education:",
            contents: [
              {
                Paragraph: "Once upon a time:",
                description:
                  "Once upon a time, in a small village, there lived a young boy named Mohan. He came from a poor family, but what set him apart was his deep curiosity and passion for learning. Though his life was simple and full of hard work, his greatest desire was to receive an education.",
              },
              {
                Paragraph: "Moral of the Story:",
                description:
                  "However, there was no school in his village. The nearest school was in the city, but Mohan's family didn’t have the money for him to attend. The only book Mohan owned was an old, tattered book that his grandmother had given him. This book was his entire world. Every day, he would read and try to understand the lessons it contained.",
              },
              {
                Paragraph: "Story:",
                description:
                  "One day, a teacher from the city, Mr. Verma, came to the village. He had been hired by a group of villagers who wanted their children to receive an education. When Mohan heard this news, he was overjoyed. He immediately approached his parents, asking them to send him to school.",
              },
            ],
          },
        ],
      },
      {
        subject: "Math",
        chapter: [
          {
            lession: "1",
            title: "The Power of Education:",
            contents: [
              {
                Paragraph: "Once upon a time:",
                description:
                  "Once upon a time, in a small village, there lived a young boy named Mohan. He came from a poor family, but what set him apart was his deep curiosity and passion for learning. Though his life was simple and full of hard work, his greatest desire was to receive an education.",
              },
              {
                Paragraph: "Moral of the Story:",
                description:
                  "However, there was no school in his village. The nearest school was in the city, but Mohan's family didn’t have the money for him to attend. The only book Mohan owned was an old, tattered book that his grandmother had given him. This book was his entire world. Every day, he would read and try to understand the lessons it contained.",
              },
              {
                Paragraph: "Story:",
                description:
                  "One day, a teacher from the city, Mr. Verma, came to the village. He had been hired by a group of villagers who wanted their children to receive an education. When Mohan heard this news, he was overjoyed. He immediately approached his parents, asking them to send him to school.",
              },
            ],
          },
        ],
      },
      {
        subject: "Phycology",
        chapter: [
          {
            lession: "1",
            title: "The Power of Education:",
            contents: [
              {
                Paragraph: "Once upon a time:",
                description:
                  "Once upon a time, in a small village, there lived a young boy named Mohan. He came from a poor family, but what set him apart was his deep curiosity and passion for learning. Though his life was simple and full of hard work, his greatest desire was to receive an education.",
              },
              {
                Paragraph: "Moral of the Story:",
                description:
                  "However, there was no school in his village. The nearest school was in the city, but Mohan's family didn’t have the money for him to attend. The only book Mohan owned was an old, tattered book that his grandmother had given him. This book was his entire world. Every day, he would read and try to understand the lessons it contained.",
              },
              {
                Paragraph: "Story:",
                description:
                  "One day, a teacher from the city, Mr. Verma, came to the village. He had been hired by a group of villagers who wanted their children to receive an education. When Mohan heard this news, he was overjoyed. He immediately approached his parents, asking them to send him to school.",
              },
            ],
          },
        ],
      },
      {
        subject: "Art",
        chapter: [
          {
            lession: "1",
            title: "The Power of Education:",
            contents: [
              {
                Paragraph: "Once upon a time:",
                description:
                  "Once upon a time, in a small village, there lived a young boy named Mohan. He came from a poor family, but what set him apart was his deep curiosity and passion for learning. Though his life was simple and full of hard work, his greatest desire was to receive an education.",
              },
              {
                Paragraph: "Moral of the Story:",
                description:
                  "However, there was no school in his village. The nearest school was in the city, but Mohan's family didn’t have the money for him to attend. The only book Mohan owned was an old, tattered book that his grandmother had given him. This book was his entire world. Every day, he would read and try to understand the lessons it contained.",
              },
              {
                Paragraph: "Story:",
                description:
                  "One day, a teacher from the city, Mr. Verma, came to the village. He had been hired by a group of villagers who wanted their children to receive an education. When Mohan heard this news, he was overjoyed. He immediately approached his parents, asking them to send him to school.",
              },
            ],
          },
        ],
      },
      {
        subject: "History",
        chapter: [
          {
            lession: "1",
            title: "The Power of Education:",
            contents: [
              {
                Paragraph: "Once upon a time:",
                description:
                  "Once upon a time, in a small village, there lived a young boy named Mohan. He came from a poor family, but what set him apart was his deep curiosity and passion for learning. Though his life was simple and full of hard work, his greatest desire was to receive an education.",
              },
              {
                Paragraph: "Moral of the Story:",
                description:
                  "However, there was no school in his village. The nearest school was in the city, but Mohan's family didn’t have the money for him to attend. The only book Mohan owned was an old, tattered book that his grandmother had given him. This book was his entire world. Every day, he would read and try to understand the lessons it contained.",
              },
              {
                Paragraph: "Story:",
                description:
                  "One day, a teacher from the city, Mr. Verma, came to the village. He had been hired by a group of villagers who wanted their children to receive an education. When Mohan heard this news, he was overjoyed. He immediately approached his parents, asking them to send him to school.",
              },
            ],
          },
        ],
      },
      {
        subject: "Computer",
        chapter: [
          {
            lession: "1",
            title: "The Power of Education:",
            contents: [
              {
                Paragraph: "Once upon a time:",
                description:
                  "Once upon a time, in a small village, there lived a young boy named Mohan. He came from a poor family, but what set him apart was his deep curiosity and passion for learning. Though his life was simple and full of hard work, his greatest desire was to receive an education.",
              },
              {
                Paragraph: "Moral of the Story:",
                description:
                  "However, there was no school in his village. The nearest school was in the city, but Mohan's family didn’t have the money for him to attend. The only book Mohan owned was an old, tattered book that his grandmother had given him. This book was his entire world. Every day, he would read and try to understand the lessons it contained.",
              },
              {
                Paragraph: "Story:",
                description:
                  "One day, a teacher from the city, Mr. Verma, came to the village. He had been hired by a group of villagers who wanted their children to receive an education. When Mohan heard this news, he was overjoyed. He immediately approached his parents, asking them to send him to school.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    class: "class-5",
    color:
      "linear-gradient(0deg, rgba(195,34,34,1) 0%, rgba(253,45,122,1) 100%)",
    subject: [
      {
        subject: "हिंदी",
        chapter: [
          {
            lession: "1",
            title: "किसी का भला हो, तो उसका कुछ अच्छा लौटाना चाहिए",
            contents: [
              {
                Paragraph: "कहानी:",
                description:
                  "बहुत समय पहले की बात है, एक छोटे से गाँव में एक आदमी रहता था, जिसका नाम अर्जुन था। वह एक साधारण किसान था, जो सुबह सूर्योदय से पहले अपने खेतों में काम करता और शाम को घर लौटता। उसकी ज़िन्दगी बहुत ही सादा और मेहनत की थी, लेकिन उसका दिल बहुत बड़ा था।",
              },
              {
                Paragraph: "एक दिन की बात है:",
                description:
                  "एक दिन गाँव के पास एक तेज़ बारिश आई और नदी का पानी बढ़ गया। नदी के किनारे पर एक छोटे से बगीचे वाले व्यक्ति का घर था, जिसका नाम रमेश था। वह व्यक्ति वृद्ध था और घर के पास उसकी कोई मदद करने वाला नहीं था। बारिश में पानी का स्तर इतना बढ़ गया था कि रमेश के घर में पानी घुसने लगा। वह डर से अपनी हालत पर रो रहा था, लेकिन उस समय अर्जुन ने देखा और बिना देर किए नदी के तेज बहाव के बीच से दौड़ते हुए रमेश के घर पहुँचा। अर्जुन ने रमेश को अपनी पीठ पर डाला और उसे नदी के पार सुरक्षित स्थान पर ले आया। वह बहुत थका हुआ था, लेकिन उसने रमेश की मदद की। रमेश ने उसे धन्यवाद कहा, और अर्जुन ने मुस्कुराते हुए कहा, 'भैया, किसी का भला करना ही हमारी असली पहचान है।'",
              },
              {
                Paragraph: "सीख:",
                description:
                  "कुछ सालों बाद, गाँव में एक बड़ी विपत्ति आई। गाँव के पास की नदी में एक बड़े बांध की दीवार टूट गई और गाँव की ओर पानी का बहाव बढ़ने लगा। पूरा गाँव तबाह हो सकता था। गाँव वाले घबराए हुए थे और किसी उपाय को लेकर कुछ सोच नहीं पा रहे थे। तभी अचानक रमेश आया, जो अब बहुत संपन्न और गाँव के बड़े व्यक्ति बन चुका था। उसने सभी गाँव वालों को एक योजना दी और नदी के पानी को नियंत्रित करने के लिए एक बड़ी दीवार बनाने का निर्णय लिया। रमेश ने अर्जुन को धन्यवाद दिया और कहा, 'याद है, उस दिन जब आप मेरी मदद के लिए आए थे, तो आपने मुझे जिंदगी दी थी। आज मेरी बारी है कि मैं आपके गाँव की मदद करूँ।' गाँव के सभी लोग रमेश की मदद से सुरक्षित हो गए और अर्जुन का दिल गर्व से भर गया। उसे एहसास हुआ कि जो भी किसी का भला करता है, उसका भला लौटकर आता है।",
              },
            ],
          },
        ],
      },
      {
        subject: "English",
        chapter: [
          {
            lession: "1",
            title: "The Power of Education:",
            contents: [
              {
                Paragraph: "Once upon a time:",
                description:
                  "Once upon a time, in a small village, there lived a young boy named Mohan. He came from a poor family, but what set him apart was his deep curiosity and passion for learning. Though his life was simple and full of hard work, his greatest desire was to receive an education.",
              },
              {
                Paragraph: "Moral of the Story:",
                description:
                  "However, there was no school in his village. The nearest school was in the city, but Mohan's family didn’t have the money for him to attend. The only book Mohan owned was an old, tattered book that his grandmother had given him. This book was his entire world. Every day, he would read and try to understand the lessons it contained.",
              },
              {
                Paragraph: "Story:",
                description:
                  "One day, a teacher from the city, Mr. Verma, came to the village. He had been hired by a group of villagers who wanted their children to receive an education. When Mohan heard this news, he was overjoyed. He immediately approached his parents, asking them to send him to school.",
              },
            ],
          },
        ],
      },
      {
        subject: "Geography",
        chapter: [
          {
            lession: "1",
            title: "The Power of Education:",
            contents: [
              {
                Paragraph: "Once upon a time:",
                description:
                  "Once upon a time, in a small village, there lived a young boy named Mohan. He came from a poor family, but what set him apart was his deep curiosity and passion for learning. Though his life was simple and full of hard work, his greatest desire was to receive an education.",
              },
              {
                Paragraph: "Moral of the Story:",
                description:
                  "However, there was no school in his village. The nearest school was in the city, but Mohan's family didn’t have the money for him to attend. The only book Mohan owned was an old, tattered book that his grandmother had given him. This book was his entire world. Every day, he would read and try to understand the lessons it contained.",
              },
              {
                Paragraph: "Story:",
                description:
                  "One day, a teacher from the city, Mr. Verma, came to the village. He had been hired by a group of villagers who wanted their children to receive an education. When Mohan heard this news, he was overjoyed. He immediately approached his parents, asking them to send him to school.",
              },
            ],
          },
        ],
      },
      {
        subject: "Math",
        chapter: [
          {
            lession: "1",
            title: "The Power of Education:",
            contents: [
              {
                Paragraph: "Once upon a time:",
                description:
                  "Once upon a time, in a small village, there lived a young boy named Mohan. He came from a poor family, but what set him apart was his deep curiosity and passion for learning. Though his life was simple and full of hard work, his greatest desire was to receive an education.",
              },
              {
                Paragraph: "Moral of the Story:",
                description:
                  "However, there was no school in his village. The nearest school was in the city, but Mohan's family didn’t have the money for him to attend. The only book Mohan owned was an old, tattered book that his grandmother had given him. This book was his entire world. Every day, he would read and try to understand the lessons it contained.",
              },
              {
                Paragraph: "Story:",
                description:
                  "One day, a teacher from the city, Mr. Verma, came to the village. He had been hired by a group of villagers who wanted their children to receive an education. When Mohan heard this news, he was overjoyed. He immediately approached his parents, asking them to send him to school.",
              },
            ],
          },
        ],
      },
      {
        subject: "Phycology",
        chapter: [
          {
            lession: "1",
            title: "The Power of Education:",
            contents: [
              {
                Paragraph: "Once upon a time:",
                description:
                  "Once upon a time, in a small village, there lived a young boy named Mohan. He came from a poor family, but what set him apart was his deep curiosity and passion for learning. Though his life was simple and full of hard work, his greatest desire was to receive an education.",
              },
              {
                Paragraph: "Moral of the Story:",
                description:
                  "However, there was no school in his village. The nearest school was in the city, but Mohan's family didn’t have the money for him to attend. The only book Mohan owned was an old, tattered book that his grandmother had given him. This book was his entire world. Every day, he would read and try to understand the lessons it contained.",
              },
              {
                Paragraph: "Story:",
                description:
                  "One day, a teacher from the city, Mr. Verma, came to the village. He had been hired by a group of villagers who wanted their children to receive an education. When Mohan heard this news, he was overjoyed. He immediately approached his parents, asking them to send him to school.",
              },
            ],
          },
        ],
      },
      {
        subject: "Art",
        chapter: [
          {
            lession: "1",
            title: "The Power of Education:",
            contents: [
              {
                Paragraph: "Once upon a time:",
                description:
                  "Once upon a time, in a small village, there lived a young boy named Mohan. He came from a poor family, but what set him apart was his deep curiosity and passion for learning. Though his life was simple and full of hard work, his greatest desire was to receive an education.",
              },
              {
                Paragraph: "Moral of the Story:",
                description:
                  "However, there was no school in his village. The nearest school was in the city, but Mohan's family didn’t have the money for him to attend. The only book Mohan owned was an old, tattered book that his grandmother had given him. This book was his entire world. Every day, he would read and try to understand the lessons it contained.",
              },
              {
                Paragraph: "Story:",
                description:
                  "One day, a teacher from the city, Mr. Verma, came to the village. He had been hired by a group of villagers who wanted their children to receive an education. When Mohan heard this news, he was overjoyed. He immediately approached his parents, asking them to send him to school.",
              },
            ],
          },
        ],
      },
      {
        subject: "History",
        chapter: [
          {
            lession: "1",
            title: "The Power of Education:",
            contents: [
              {
                Paragraph: "Once upon a time:",
                description:
                  "Once upon a time, in a small village, there lived a young boy named Mohan. He came from a poor family, but what set him apart was his deep curiosity and passion for learning. Though his life was simple and full of hard work, his greatest desire was to receive an education.",
              },
              {
                Paragraph: "Moral of the Story:",
                description:
                  "However, there was no school in his village. The nearest school was in the city, but Mohan's family didn’t have the money for him to attend. The only book Mohan owned was an old, tattered book that his grandmother had given him. This book was his entire world. Every day, he would read and try to understand the lessons it contained.",
              },
              {
                Paragraph: "Story:",
                description:
                  "One day, a teacher from the city, Mr. Verma, came to the village. He had been hired by a group of villagers who wanted their children to receive an education. When Mohan heard this news, he was overjoyed. He immediately approached his parents, asking them to send him to school.",
              },
            ],
          },
        ],
      },
      {
        subject: "Computer",
        chapter: [
          {
            lession: "1",
            title: "The Power of Education:",
            contents: [
              {
                Paragraph: "Once upon a time:",
                description:
                  "Once upon a time, in a small village, there lived a young boy named Mohan. He came from a poor family, but what set him apart was his deep curiosity and passion for learning. Though his life was simple and full of hard work, his greatest desire was to receive an education.",
              },
              {
                Paragraph: "Moral of the Story:",
                description:
                  "However, there was no school in his village. The nearest school was in the city, but Mohan's family didn’t have the money for him to attend. The only book Mohan owned was an old, tattered book that his grandmother had given him. This book was his entire world. Every day, he would read and try to understand the lessons it contained.",
              },
              {
                Paragraph: "Story:",
                description:
                  "One day, a teacher from the city, Mr. Verma, came to the village. He had been hired by a group of villagers who wanted their children to receive an education. When Mohan heard this news, he was overjoyed. He immediately approached his parents, asking them to send him to school.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    class: "class-6",
    color:
      "linear-gradient(0deg, rgba(22,119,41,1) 0%, rgba(81,253,45,1) 100%)",
    subject: [
      {
        subject: "हिंदी",
        chapter: [
          {
            lession: "1",
            title: "किसी का भला हो, तो उसका कुछ अच्छा लौटाना चाहिए",
            contents: [
              {
                Paragraph: "कहानी:",
                description:
                  "बहुत समय पहले की बात है, एक छोटे से गाँव में एक आदमी रहता था, जिसका नाम अर्जुन था। वह एक साधारण किसान था, जो सुबह सूर्योदय से पहले अपने खेतों में काम करता और शाम को घर लौटता। उसकी ज़िन्दगी बहुत ही सादा और मेहनत की थी, लेकिन उसका दिल बहुत बड़ा था।",
              },
              {
                Paragraph: "एक दिन की बात है:",
                description:
                  "एक दिन गाँव के पास एक तेज़ बारिश आई और नदी का पानी बढ़ गया। नदी के किनारे पर एक छोटे से बगीचे वाले व्यक्ति का घर था, जिसका नाम रमेश था। वह व्यक्ति वृद्ध था और घर के पास उसकी कोई मदद करने वाला नहीं था। बारिश में पानी का स्तर इतना बढ़ गया था कि रमेश के घर में पानी घुसने लगा। वह डर से अपनी हालत पर रो रहा था, लेकिन उस समय अर्जुन ने देखा और बिना देर किए नदी के तेज बहाव के बीच से दौड़ते हुए रमेश के घर पहुँचा। अर्जुन ने रमेश को अपनी पीठ पर डाला और उसे नदी के पार सुरक्षित स्थान पर ले आया। वह बहुत थका हुआ था, लेकिन उसने रमेश की मदद की। रमेश ने उसे धन्यवाद कहा, और अर्जुन ने मुस्कुराते हुए कहा, 'भैया, किसी का भला करना ही हमारी असली पहचान है।'",
              },
              {
                Paragraph: "सीख:",
                description:
                  "कुछ सालों बाद, गाँव में एक बड़ी विपत्ति आई। गाँव के पास की नदी में एक बड़े बांध की दीवार टूट गई और गाँव की ओर पानी का बहाव बढ़ने लगा। पूरा गाँव तबाह हो सकता था। गाँव वाले घबराए हुए थे और किसी उपाय को लेकर कुछ सोच नहीं पा रहे थे। तभी अचानक रमेश आया, जो अब बहुत संपन्न और गाँव के बड़े व्यक्ति बन चुका था। उसने सभी गाँव वालों को एक योजना दी और नदी के पानी को नियंत्रित करने के लिए एक बड़ी दीवार बनाने का निर्णय लिया। रमेश ने अर्जुन को धन्यवाद दिया और कहा, 'याद है, उस दिन जब आप मेरी मदद के लिए आए थे, तो आपने मुझे जिंदगी दी थी। आज मेरी बारी है कि मैं आपके गाँव की मदद करूँ।' गाँव के सभी लोग रमेश की मदद से सुरक्षित हो गए और अर्जुन का दिल गर्व से भर गया। उसे एहसास हुआ कि जो भी किसी का भला करता है, उसका भला लौटकर आता है।",
              },
            ],
          },
        ],
      },
      {
        subject: "English",
        chapter: [
          {
            lession: "1",
            title: "The Power of Education:",
            contents: [
              {
                Paragraph: "Once upon a time:",
                description:
                  "Once upon a time, in a small village, there lived a young boy named Mohan. He came from a poor family, but what set him apart was his deep curiosity and passion for learning. Though his life was simple and full of hard work, his greatest desire was to receive an education.",
              },
              {
                Paragraph: "Moral of the Story:",
                description:
                  "However, there was no school in his village. The nearest school was in the city, but Mohan's family didn’t have the money for him to attend. The only book Mohan owned was an old, tattered book that his grandmother had given him. This book was his entire world. Every day, he would read and try to understand the lessons it contained.",
              },
              {
                Paragraph: "Story:",
                description:
                  "One day, a teacher from the city, Mr. Verma, came to the village. He had been hired by a group of villagers who wanted their children to receive an education. When Mohan heard this news, he was overjoyed. He immediately approached his parents, asking them to send him to school.",
              },
            ],
          },
        ],
      },
      {
        subject: "Geography",
        chapter: [
          {
            lession: "1",
            title: "The Power of Education:",
            contents: [
              {
                Paragraph: "Once upon a time:",
                description:
                  "Once upon a time, in a small village, there lived a young boy named Mohan. He came from a poor family, but what set him apart was his deep curiosity and passion for learning. Though his life was simple and full of hard work, his greatest desire was to receive an education.",
              },
              {
                Paragraph: "Moral of the Story:",
                description:
                  "However, there was no school in his village. The nearest school was in the city, but Mohan's family didn’t have the money for him to attend. The only book Mohan owned was an old, tattered book that his grandmother had given him. This book was his entire world. Every day, he would read and try to understand the lessons it contained.",
              },
              {
                Paragraph: "Story:",
                description:
                  "One day, a teacher from the city, Mr. Verma, came to the village. He had been hired by a group of villagers who wanted their children to receive an education. When Mohan heard this news, he was overjoyed. He immediately approached his parents, asking them to send him to school.",
              },
            ],
          },
        ],
      },
      {
        subject: "Math",
        chapter: [
          {
            lession: "1",
            title: "The Power of Education:",
            contents: [
              {
                Paragraph: "Once upon a time:",
                description:
                  "Once upon a time, in a small village, there lived a young boy named Mohan. He came from a poor family, but what set him apart was his deep curiosity and passion for learning. Though his life was simple and full of hard work, his greatest desire was to receive an education.",
              },
              {
                Paragraph: "Moral of the Story:",
                description:
                  "However, there was no school in his village. The nearest school was in the city, but Mohan's family didn’t have the money for him to attend. The only book Mohan owned was an old, tattered book that his grandmother had given him. This book was his entire world. Every day, he would read and try to understand the lessons it contained.",
              },
              {
                Paragraph: "Story:",
                description:
                  "One day, a teacher from the city, Mr. Verma, came to the village. He had been hired by a group of villagers who wanted their children to receive an education. When Mohan heard this news, he was overjoyed. He immediately approached his parents, asking them to send him to school.",
              },
            ],
          },
        ],
      },
      {
        subject: "Phycology",
        chapter: [
          {
            lession: "1",
            title: "The Power of Education:",
            contents: [
              {
                Paragraph: "Once upon a time:",
                description:
                  "Once upon a time, in a small village, there lived a young boy named Mohan. He came from a poor family, but what set him apart was his deep curiosity and passion for learning. Though his life was simple and full of hard work, his greatest desire was to receive an education.",
              },
              {
                Paragraph: "Moral of the Story:",
                description:
                  "However, there was no school in his village. The nearest school was in the city, but Mohan's family didn’t have the money for him to attend. The only book Mohan owned was an old, tattered book that his grandmother had given him. This book was his entire world. Every day, he would read and try to understand the lessons it contained.",
              },
              {
                Paragraph: "Story:",
                description:
                  "One day, a teacher from the city, Mr. Verma, came to the village. He had been hired by a group of villagers who wanted their children to receive an education. When Mohan heard this news, he was overjoyed. He immediately approached his parents, asking them to send him to school.",
              },
            ],
          },
        ],
      },
      {
        subject: "Art",
        chapter: [
          {
            lession: "1",
            title: "The Power of Education:",
            contents: [
              {
                Paragraph: "Once upon a time:",
                description:
                  "Once upon a time, in a small village, there lived a young boy named Mohan. He came from a poor family, but what set him apart was his deep curiosity and passion for learning. Though his life was simple and full of hard work, his greatest desire was to receive an education.",
              },
              {
                Paragraph: "Moral of the Story:",
                description:
                  "However, there was no school in his village. The nearest school was in the city, but Mohan's family didn’t have the money for him to attend. The only book Mohan owned was an old, tattered book that his grandmother had given him. This book was his entire world. Every day, he would read and try to understand the lessons it contained.",
              },
              {
                Paragraph: "Story:",
                description:
                  "One day, a teacher from the city, Mr. Verma, came to the village. He had been hired by a group of villagers who wanted their children to receive an education. When Mohan heard this news, he was overjoyed. He immediately approached his parents, asking them to send him to school.",
              },
            ],
          },
        ],
      },
      {
        subject: "History",
        chapter: [
          {
            lession: "1",
            title: "The Power of Education:",
            contents: [
              {
                Paragraph: "Once upon a time:",
                description:
                  "Once upon a time, in a small village, there lived a young boy named Mohan. He came from a poor family, but what set him apart was his deep curiosity and passion for learning. Though his life was simple and full of hard work, his greatest desire was to receive an education.",
              },
              {
                Paragraph: "Moral of the Story:",
                description:
                  "However, there was no school in his village. The nearest school was in the city, but Mohan's family didn’t have the money for him to attend. The only book Mohan owned was an old, tattered book that his grandmother had given him. This book was his entire world. Every day, he would read and try to understand the lessons it contained.",
              },
              {
                Paragraph: "Story:",
                description:
                  "One day, a teacher from the city, Mr. Verma, came to the village. He had been hired by a group of villagers who wanted their children to receive an education. When Mohan heard this news, he was overjoyed. He immediately approached his parents, asking them to send him to school.",
              },
            ],
          },
        ],
      },
      {
        subject: "Computer",
        chapter: [
          {
            lession: "1",
            title: "The Power of Education:",
            contents: [
              {
                Paragraph: "Once upon a time:",
                description:
                  "Once upon a time, in a small village, there lived a young boy named Mohan. He came from a poor family, but what set him apart was his deep curiosity and passion for learning. Though his life was simple and full of hard work, his greatest desire was to receive an education.",
              },
              {
                Paragraph: "Moral of the Story:",
                description:
                  "However, there was no school in his village. The nearest school was in the city, but Mohan's family didn’t have the money for him to attend. The only book Mohan owned was an old, tattered book that his grandmother had given him. This book was his entire world. Every day, he would read and try to understand the lessons it contained.",
              },
              {
                Paragraph: "Story:",
                description:
                  "One day, a teacher from the city, Mr. Verma, came to the village. He had been hired by a group of villagers who wanted their children to receive an education. When Mohan heard this news, he was overjoyed. He immediately approached his parents, asking them to send him to school.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    class: "class-7",
    color:
      "linear-gradient(0deg, rgba(119,114,22,1) 0%, rgba(217,253,45,1) 100%)",
    subject: [
      {
        subject: "हिंदी",
        chapter: [
          {
            lession: "1",
            title: "किसी का भला हो, तो उसका कुछ अच्छा लौटाना चाहिए",
            contents: [
              {
                Paragraph: "कहानी:",
                description:
                  "बहुत समय पहले की बात है, एक छोटे से गाँव में एक आदमी रहता था, जिसका नाम अर्जुन था। वह एक साधारण किसान था, जो सुबह सूर्योदय से पहले अपने खेतों में काम करता और शाम को घर लौटता। उसकी ज़िन्दगी बहुत ही सादा और मेहनत की थी, लेकिन उसका दिल बहुत बड़ा था।",
              },
              {
                Paragraph: "एक दिन की बात है:",
                description:
                  "एक दिन गाँव के पास एक तेज़ बारिश आई और नदी का पानी बढ़ गया। नदी के किनारे पर एक छोटे से बगीचे वाले व्यक्ति का घर था, जिसका नाम रमेश था। वह व्यक्ति वृद्ध था और घर के पास उसकी कोई मदद करने वाला नहीं था। बारिश में पानी का स्तर इतना बढ़ गया था कि रमेश के घर में पानी घुसने लगा। वह डर से अपनी हालत पर रो रहा था, लेकिन उस समय अर्जुन ने देखा और बिना देर किए नदी के तेज बहाव के बीच से दौड़ते हुए रमेश के घर पहुँचा। अर्जुन ने रमेश को अपनी पीठ पर डाला और उसे नदी के पार सुरक्षित स्थान पर ले आया। वह बहुत थका हुआ था, लेकिन उसने रमेश की मदद की। रमेश ने उसे धन्यवाद कहा, और अर्जुन ने मुस्कुराते हुए कहा, 'भैया, किसी का भला करना ही हमारी असली पहचान है।'",
              },
              {
                Paragraph: "सीख:",
                description:
                  "कुछ सालों बाद, गाँव में एक बड़ी विपत्ति आई। गाँव के पास की नदी में एक बड़े बांध की दीवार टूट गई और गाँव की ओर पानी का बहाव बढ़ने लगा। पूरा गाँव तबाह हो सकता था। गाँव वाले घबराए हुए थे और किसी उपाय को लेकर कुछ सोच नहीं पा रहे थे। तभी अचानक रमेश आया, जो अब बहुत संपन्न और गाँव के बड़े व्यक्ति बन चुका था। उसने सभी गाँव वालों को एक योजना दी और नदी के पानी को नियंत्रित करने के लिए एक बड़ी दीवार बनाने का निर्णय लिया। रमेश ने अर्जुन को धन्यवाद दिया और कहा, 'याद है, उस दिन जब आप मेरी मदद के लिए आए थे, तो आपने मुझे जिंदगी दी थी। आज मेरी बारी है कि मैं आपके गाँव की मदद करूँ।' गाँव के सभी लोग रमेश की मदद से सुरक्षित हो गए और अर्जुन का दिल गर्व से भर गया। उसे एहसास हुआ कि जो भी किसी का भला करता है, उसका भला लौटकर आता है।",
              },
            ],
          },
        ],
      },
      {
        subject: "English",
        chapter: [
          {
            lession: "1",
            title: "The Power of Education:",
            contents: [
              {
                Paragraph: "Once upon a time:",
                description:
                  "Once upon a time, in a small village, there lived a young boy named Mohan. He came from a poor family, but what set him apart was his deep curiosity and passion for learning. Though his life was simple and full of hard work, his greatest desire was to receive an education.",
              },
              {
                Paragraph: "Moral of the Story:",
                description:
                  "However, there was no school in his village. The nearest school was in the city, but Mohan's family didn’t have the money for him to attend. The only book Mohan owned was an old, tattered book that his grandmother had given him. This book was his entire world. Every day, he would read and try to understand the lessons it contained.",
              },
              {
                Paragraph: "Story:",
                description:
                  "One day, a teacher from the city, Mr. Verma, came to the village. He had been hired by a group of villagers who wanted their children to receive an education. When Mohan heard this news, he was overjoyed. He immediately approached his parents, asking them to send him to school.",
              },
            ],
          },
        ],
      },
      {
        subject: "Geography",
        chapter: [
          {
            lession: "1",
            title: "The Power of Education:",
            contents: [
              {
                Paragraph: "Once upon a time:",
                description:
                  "Once upon a time, in a small village, there lived a young boy named Mohan. He came from a poor family, but what set him apart was his deep curiosity and passion for learning. Though his life was simple and full of hard work, his greatest desire was to receive an education.",
              },
              {
                Paragraph: "Moral of the Story:",
                description:
                  "However, there was no school in his village. The nearest school was in the city, but Mohan's family didn’t have the money for him to attend. The only book Mohan owned was an old, tattered book that his grandmother had given him. This book was his entire world. Every day, he would read and try to understand the lessons it contained.",
              },
              {
                Paragraph: "Story:",
                description:
                  "One day, a teacher from the city, Mr. Verma, came to the village. He had been hired by a group of villagers who wanted their children to receive an education. When Mohan heard this news, he was overjoyed. He immediately approached his parents, asking them to send him to school.",
              },
            ],
          },
        ],
      },
      {
        subject: "Math",
        chapter: [
          {
            lession: "1",
            title: "The Power of Education:",
            contents: [
              {
                Paragraph: "Once upon a time:",
                description:
                  "Once upon a time, in a small village, there lived a young boy named Mohan. He came from a poor family, but what set him apart was his deep curiosity and passion for learning. Though his life was simple and full of hard work, his greatest desire was to receive an education.",
              },
              {
                Paragraph: "Moral of the Story:",
                description:
                  "However, there was no school in his village. The nearest school was in the city, but Mohan's family didn’t have the money for him to attend. The only book Mohan owned was an old, tattered book that his grandmother had given him. This book was his entire world. Every day, he would read and try to understand the lessons it contained.",
              },
              {
                Paragraph: "Story:",
                description:
                  "One day, a teacher from the city, Mr. Verma, came to the village. He had been hired by a group of villagers who wanted their children to receive an education. When Mohan heard this news, he was overjoyed. He immediately approached his parents, asking them to send him to school.",
              },
            ],
          },
        ],
      },
      {
        subject: "Phycology",
        chapter: [
          {
            lession: "1",
            title: "The Power of Education:",
            contents: [
              {
                Paragraph: "Once upon a time:",
                description:
                  "Once upon a time, in a small village, there lived a young boy named Mohan. He came from a poor family, but what set him apart was his deep curiosity and passion for learning. Though his life was simple and full of hard work, his greatest desire was to receive an education.",
              },
              {
                Paragraph: "Moral of the Story:",
                description:
                  "However, there was no school in his village. The nearest school was in the city, but Mohan's family didn’t have the money for him to attend. The only book Mohan owned was an old, tattered book that his grandmother had given him. This book was his entire world. Every day, he would read and try to understand the lessons it contained.",
              },
              {
                Paragraph: "Story:",
                description:
                  "One day, a teacher from the city, Mr. Verma, came to the village. He had been hired by a group of villagers who wanted their children to receive an education. When Mohan heard this news, he was overjoyed. He immediately approached his parents, asking them to send him to school.",
              },
            ],
          },
        ],
      },
      {
        subject: "Art",
        chapter: [
          {
            lession: "1",
            title: "The Power of Education:",
            contents: [
              {
                Paragraph: "Once upon a time:",
                description:
                  "Once upon a time, in a small village, there lived a young boy named Mohan. He came from a poor family, but what set him apart was his deep curiosity and passion for learning. Though his life was simple and full of hard work, his greatest desire was to receive an education.",
              },
              {
                Paragraph: "Moral of the Story:",
                description:
                  "However, there was no school in his village. The nearest school was in the city, but Mohan's family didn’t have the money for him to attend. The only book Mohan owned was an old, tattered book that his grandmother had given him. This book was his entire world. Every day, he would read and try to understand the lessons it contained.",
              },
              {
                Paragraph: "Story:",
                description:
                  "One day, a teacher from the city, Mr. Verma, came to the village. He had been hired by a group of villagers who wanted their children to receive an education. When Mohan heard this news, he was overjoyed. He immediately approached his parents, asking them to send him to school.",
              },
            ],
          },
        ],
      },
      {
        subject: "History",
        chapter: [
          {
            lession: "1",
            title: "The Power of Education:",
            contents: [
              {
                Paragraph: "Once upon a time:",
                description:
                  "Once upon a time, in a small village, there lived a young boy named Mohan. He came from a poor family, but what set him apart was his deep curiosity and passion for learning. Though his life was simple and full of hard work, his greatest desire was to receive an education.",
              },
              {
                Paragraph: "Moral of the Story:",
                description:
                  "However, there was no school in his village. The nearest school was in the city, but Mohan's family didn’t have the money for him to attend. The only book Mohan owned was an old, tattered book that his grandmother had given him. This book was his entire world. Every day, he would read and try to understand the lessons it contained.",
              },
              {
                Paragraph: "Story:",
                description:
                  "One day, a teacher from the city, Mr. Verma, came to the village. He had been hired by a group of villagers who wanted their children to receive an education. When Mohan heard this news, he was overjoyed. He immediately approached his parents, asking them to send him to school.",
              },
            ],
          },
        ],
      },
      {
        subject: "Computer",
        chapter: [
          {
            lession: "1",
            title: "The Power of Education:",
            contents: [
              {
                Paragraph: "Once upon a time:",
                description:
                  "Once upon a time, in a small village, there lived a young boy named Mohan. He came from a poor family, but what set him apart was his deep curiosity and passion for learning. Though his life was simple and full of hard work, his greatest desire was to receive an education.",
              },
              {
                Paragraph: "Moral of the Story:",
                description:
                  "However, there was no school in his village. The nearest school was in the city, but Mohan's family didn’t have the money for him to attend. The only book Mohan owned was an old, tattered book that his grandmother had given him. This book was his entire world. Every day, he would read and try to understand the lessons it contained.",
              },
              {
                Paragraph: "Story:",
                description:
                  "One day, a teacher from the city, Mr. Verma, came to the village. He had been hired by a group of villagers who wanted their children to receive an education. When Mohan heard this news, he was overjoyed. He immediately approached his parents, asking them to send him to school.",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    class: "class-8",
    color:
      "linear-gradient(0deg, rgba(22,119,102,1) 0%, rgba(45,253,188,1) 100%)",
    subject: [
      {
        subject: "हिंदी",
        chapter: [
          {
            lession: "1",
            title: "किसी का भला हो, तो उसका कुछ अच्छा लौटाना चाहिए",
            contents: [
              {
                Paragraph: "कहानी:",
                description:
                  "बहुत समय पहले की बात है, एक छोटे से गाँव में एक आदमी रहता था, जिसका नाम अर्जुन था। वह एक साधारण किसान था, जो सुबह सूर्योदय से पहले अपने खेतों में काम करता और शाम को घर लौटता। उसकी ज़िन्दगी बहुत ही सादा और मेहनत की थी, लेकिन उसका दिल बहुत बड़ा था।",
              },
              {
                Paragraph: "एक दिन की बात है:",
                description:
                  "एक दिन गाँव के पास एक तेज़ बारिश आई और नदी का पानी बढ़ गया। नदी के किनारे पर एक छोटे से बगीचे वाले व्यक्ति का घर था, जिसका नाम रमेश था। वह व्यक्ति वृद्ध था और घर के पास उसकी कोई मदद करने वाला नहीं था। बारिश में पानी का स्तर इतना बढ़ गया था कि रमेश के घर में पानी घुसने लगा। वह डर से अपनी हालत पर रो रहा था, लेकिन उस समय अर्जुन ने देखा और बिना देर किए नदी के तेज बहाव के बीच से दौड़ते हुए रमेश के घर पहुँचा। अर्जुन ने रमेश को अपनी पीठ पर डाला और उसे नदी के पार सुरक्षित स्थान पर ले आया। वह बहुत थका हुआ था, लेकिन उसने रमेश की मदद की। रमेश ने उसे धन्यवाद कहा, और अर्जुन ने मुस्कुराते हुए कहा, 'भैया, किसी का भला करना ही हमारी असली पहचान है।'",
              },
              {
                Paragraph: "सीख:",
                description:
                  "कुछ सालों बाद, गाँव में एक बड़ी विपत्ति आई। गाँव के पास की नदी में एक बड़े बांध की दीवार टूट गई और गाँव की ओर पानी का बहाव बढ़ने लगा। पूरा गाँव तबाह हो सकता था। गाँव वाले घबराए हुए थे और किसी उपाय को लेकर कुछ सोच नहीं पा रहे थे। तभी अचानक रमेश आया, जो अब बहुत संपन्न और गाँव के बड़े व्यक्ति बन चुका था। उसने सभी गाँव वालों को एक योजना दी और नदी के पानी को नियंत्रित करने के लिए एक बड़ी दीवार बनाने का निर्णय लिया। रमेश ने अर्जुन को धन्यवाद दिया और कहा, 'याद है, उस दिन जब आप मेरी मदद के लिए आए थे, तो आपने मुझे जिंदगी दी थी। आज मेरी बारी है कि मैं आपके गाँव की मदद करूँ।' गाँव के सभी लोग रमेश की मदद से सुरक्षित हो गए और अर्जुन का दिल गर्व से भर गया। उसे एहसास हुआ कि जो भी किसी का भला करता है, उसका भला लौटकर आता है।",
              },
            ],
          },
        ],
      },
      {
        subject: "English",
        chapter: [
          {
            lession: "1",
            title: "The Power of Education:",
            contents: [
              {
                Paragraph: "Once upon a time:",
                description:
                  "Once upon a time, in a small village, there lived a young boy named Mohan. He came from a poor family, but what set him apart was his deep curiosity and passion for learning. Though his life was simple and full of hard work, his greatest desire was to receive an education.",
              },
              {
                Paragraph: "Moral of the Story:",
                description:
                  "However, there was no school in his village. The nearest school was in the city, but Mohan's family didn’t have the money for him to attend. The only book Mohan owned was an old, tattered book that his grandmother had given him. This book was his entire world. Every day, he would read and try to understand the lessons it contained.",
              },
              {
                Paragraph: "Story:",
                description:
                  "One day, a teacher from the city, Mr. Verma, came to the village. He had been hired by a group of villagers who wanted their children to receive an education. When Mohan heard this news, he was overjoyed. He immediately approached his parents, asking them to send him to school.",
              },
            ],
          },
        ],
      },
      {
        subject: "Geography",
        chapter: [
          {
            lession: "1",
            title: "The Power of Education:",
            contents: [
              {
                Paragraph: "Once upon a time:",
                description:
                  "Once upon a time, in a small village, there lived a young boy named Mohan. He came from a poor family, but what set him apart was his deep curiosity and passion for learning. Though his life was simple and full of hard work, his greatest desire was to receive an education.",
              },
              {
                Paragraph: "Moral of the Story:",
                description:
                  "However, there was no school in his village. The nearest school was in the city, but Mohan's family didn’t have the money for him to attend. The only book Mohan owned was an old, tattered book that his grandmother had given him. This book was his entire world. Every day, he would read and try to understand the lessons it contained.",
              },
              {
                Paragraph: "Story:",
                description:
                  "One day, a teacher from the city, Mr. Verma, came to the village. He had been hired by a group of villagers who wanted their children to receive an education. When Mohan heard this news, he was overjoyed. He immediately approached his parents, asking them to send him to school.",
              },
            ],
          },
        ],
      },
      {
        subject: "Math",
        chapter: [
          {
            lession: "1",
            title: "The Power of Education:",
            contents: [
              {
                Paragraph: "Once upon a time:",
                description:
                  "Once upon a time, in a small village, there lived a young boy named Mohan. He came from a poor family, but what set him apart was his deep curiosity and passion for learning. Though his life was simple and full of hard work, his greatest desire was to receive an education.",
              },
              {
                Paragraph: "Moral of the Story:",
                description:
                  "However, there was no school in his village. The nearest school was in the city, but Mohan's family didn’t have the money for him to attend. The only book Mohan owned was an old, tattered book that his grandmother had given him. This book was his entire world. Every day, he would read and try to understand the lessons it contained.",
              },
              {
                Paragraph: "Story:",
                description:
                  "One day, a teacher from the city, Mr. Verma, came to the village. He had been hired by a group of villagers who wanted their children to receive an education. When Mohan heard this news, he was overjoyed. He immediately approached his parents, asking them to send him to school.",
              },
            ],
          },
        ],
      },
      {
        subject: "Phycology",
        chapter: [
          {
            lession: "1",
            title: "The Power of Education:",
            contents: [
              {
                Paragraph: "Once upon a time:",
                description:
                  "Once upon a time, in a small village, there lived a young boy named Mohan. He came from a poor family, but what set him apart was his deep curiosity and passion for learning. Though his life was simple and full of hard work, his greatest desire was to receive an education.",
              },
              {
                Paragraph: "Moral of the Story:",
                description:
                  "However, there was no school in his village. The nearest school was in the city, but Mohan's family didn’t have the money for him to attend. The only book Mohan owned was an old, tattered book that his grandmother had given him. This book was his entire world. Every day, he would read and try to understand the lessons it contained.",
              },
              {
                Paragraph: "Story:",
                description:
                  "One day, a teacher from the city, Mr. Verma, came to the village. He had been hired by a group of villagers who wanted their children to receive an education. When Mohan heard this news, he was overjoyed. He immediately approached his parents, asking them to send him to school.",
              },
            ],
          },
        ],
      },
      {
        subject: "Art",
        chapter: [
          {
            lession: "1",
            title: "The Power of Education:",
            contents: [
              {
                Paragraph: "Once upon a time:",
                description:
                  "Once upon a time, in a small village, there lived a young boy named Mohan. He came from a poor family, but what set him apart was his deep curiosity and passion for learning. Though his life was simple and full of hard work, his greatest desire was to receive an education.",
              },
              {
                Paragraph: "Moral of the Story:",
                description:
                  "However, there was no school in his village. The nearest school was in the city, but Mohan's family didn’t have the money for him to attend. The only book Mohan owned was an old, tattered book that his grandmother had given him. This book was his entire world. Every day, he would read and try to understand the lessons it contained.",
              },
              {
                Paragraph: "Story:",
                description:
                  "One day, a teacher from the city, Mr. Verma, came to the village. He had been hired by a group of villagers who wanted their children to receive an education. When Mohan heard this news, he was overjoyed. He immediately approached his parents, asking them to send him to school.",
              },
            ],
          },
        ],
      },
      {
        subject: "History",
        chapter: [
          {
            lession: "1",
            title: "The Power of Education:",
            contents: [
              {
                Paragraph: "Once upon a time:",
                description:
                  "Once upon a time, in a small village, there lived a young boy named Mohan. He came from a poor family, but what set him apart was his deep curiosity and passion for learning. Though his life was simple and full of hard work, his greatest desire was to receive an education.",
              },
              {
                Paragraph: "Moral of the Story:",
                description:
                  "However, there was no school in his village. The nearest school was in the city, but Mohan's family didn’t have the money for him to attend. The only book Mohan owned was an old, tattered book that his grandmother had given him. This book was his entire world. Every day, he would read and try to understand the lessons it contained.",
              },
              {
                Paragraph: "Story:",
                description:
                  "One day, a teacher from the city, Mr. Verma, came to the village. He had been hired by a group of villagers who wanted their children to receive an education. When Mohan heard this news, he was overjoyed. He immediately approached his parents, asking them to send him to school.",
              },
            ],
          },
        ],
      },
      {
        subject: "Computer",
        chapter: [
          {
            lession: "1",
            title: "The Power of Education:",
            contents: [
              {
                Paragraph: "Once upon a time:",
                description:
                  "Once upon a time, in a small village, there lived a young boy named Mohan. He came from a poor family, but what set him apart was his deep curiosity and passion for learning. Though his life was simple and full of hard work, his greatest desire was to receive an education.",
              },
              {
                Paragraph: "Moral of the Story:",
                description:
                  "However, there was no school in his village. The nearest school was in the city, but Mohan's family didn’t have the money for him to attend. The only book Mohan owned was an old, tattered book that his grandmother had given him. This book was his entire world. Every day, he would read and try to understand the lessons it contained.",
              },
              {
                Paragraph: "Story:",
                description:
                  "One day, a teacher from the city, Mr. Verma, came to the village. He had been hired by a group of villagers who wanted their children to receive an education. When Mohan heard this news, he was overjoyed. He immediately approached his parents, asking them to send him to school.",
              },
            ],
          },
        ],
      },
    ],
  },
];
