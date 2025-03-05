export function pluralizeRussian(
    number: number,
    zeroForm: string,
    oneForm: string,
    twoForm: string,
    manyForm: string
): string {
    /**
     * Функция для выбора правильной формы слова в зависимости от числа.
     *
     * @param {number} number - Число, определяющее форму слова
     * @param {string} zeroForm - Форма слова для 0 значений
     * @param {string} oneForm - Форма слова для 1 значения
     * @param {string} twoForm - Форма слова для 2-4 значений
     * @param {string} manyForm - Форма слова для 5 и более значений
     * @return {string} - Правильная форма слова
     */

    if (number === 0) {
        return zeroForm;
    } else if (number % 10 === 1 && number % 100 !== 11) {
        return oneForm;
    } else if (number % 10 >= 2 && number % 10 <= 4 && !(number % 100 >= 12 && number % 100 <= 14)) {
        return twoForm;
    } else {
        return manyForm;
    }
}
