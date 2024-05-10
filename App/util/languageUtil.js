import defaultArabicJSON from '../brands/default/translations/arabic.json';
import defaultRomanJSON from '../brands/default/translations/roman.json';
import brandedArabicJSON from 'translations/arabic.json';
import brandedRomanJSON from 'translations/roman.json';

const languageMap = {
    arabic: { ...defaultArabicJSON, ...brandedArabicJSON },
    roman: { ...defaultRomanJSON, ...brandedRomanJSON },
}

export const translationsOf = (lanuage) => {
    return languageMap[lanuage];
}