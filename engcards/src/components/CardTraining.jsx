import React from 'react'
import Card from './Card'

const words = [{ "id": "12074", "english": "turquoise", "transcription": "[ ˈtɜːkwɔɪz ]", "russian": "бирюзовый", "tags": "цвета"}, { "id": "12080", "english": "olive", "transcription": "[ ˈɒlɪv ]", "russian": "оливковый", "tags": "цвета"}, { "id": "12081", "english": "sky blue", "transcription": "[ skaɪ bluː ]", "russian": "небесно-голубой", "tags": "цвета"}, { "id": "12082", "english": "honeydew", "transcription": "[ ˈhʌnɪdjuː ]", "russian": "медовый", "tags": "цвета"}, { "id": "12083", "english": "lime green", "transcription": "[ laɪm ɡriːn ]", "russian": "лимонно-зеленый", "tags": "цвета"}, { "id": "12085", "english": "bay", "transcription": "[bei]", "russian": "лавр", "tags": "деревья"}, { "id": "12086", "english": "larch", "transcription": "[la:t∫]", "russian": "лиственница", "tags": "деревья"}, { "id": "12087", "english": "abdomen", "transcription": "[ ˈæbdəmən ]\t", "russian": "живот", "tags": "анатомия"}, { "id": "12088", "english": "ankle", "transcription": "[ ˈæŋkl̩ ]", "russian": "голеностоп", "tags": "анатомия"}, { "id": "12089", "english": "appendix", "transcription": "[ əˈpendɪks ]", "russian": "аппендикс", "tags": "анатомия"}, { "id": "12091", "english": "artery", "transcription": "[ ˈɑːtəri ]", "russian": "артерия", "tags": "анатомия"}, { "id": "12092", "english": "backbone", "transcription": "[ ˈbækbəʊn ]", "russian": "позвоночник", "tags": "анатомия"}, { "id": "12093", "english": "biceps", "transcription": "[ ˈbaɪseps ]", "russian": "бицепс", "tags": "анатомия"}, { "id": "12094", "english": "bowels", "transcription": "[ ˈbaʊəlz ]", "russian": "кишечник", "tags": "анатомия"}, { "id": "12095", "english": "brain", "transcription": "[ breɪn ]", "russian": "мозг", "tags": "анатомия"}]

function CardTraining() {
  return (
    <div>
    {
        words.map((word) =>
        <Card  english ={word.english} transcription ={word.transcription} russian ={word.russian} tags ={word.tags}/>
        )
    }
    </div>
  )
}

export default CardTraining