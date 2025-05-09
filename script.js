document.addEventListener('DOMContentLoaded', () => {
    const resultElement = document.getElementById('result');
    const drawButton = document.getElementById('drawButton');
    const newMenuInput = document.getElementById('newMenu');
    const addMenuButton = document.getElementById('addMenuButton');
    const menuListElement = document.getElementById('menuList');
    let menuItems = [
        '치킨 (후라이드)',
        '치킨 (양념)',
        '피자 (페퍼로니)',
        '피자 (고구마)',
        '족발',
        '보쌈',
        '짜장면',
        '짬뽕',
        '탕수육',
        '떡볶이',
        '닭갈비',
        '삼겹살 (배달)',
        '회 (모듬)',
        '찜닭',
        '마라탕',
        '곱창/막창',
        '분식 (떡튀순)',
        '햄버거 세트',
        '샌드위치/샐러드',
        '돈까스',
        '비빔국수',
        '잔치국수',
        '김밥/분식',
        '볶음밥',
        '덮밥 (제육/오징어 등)'
    ]; // 더욱 풍성해진 초기 메뉴 목록

    // 초기 메뉴 목록 화면에 표시
    function updateMenuList() {
        menuListElement.innerHTML = '';
        menuItems.forEach(menu => {
            const listItem = document.createElement('li');
            listItem.textContent = menu;
            menuListElement.appendChild(listItem);
        });
    }

    updateMenuList();

    // 메뉴 뽑기 버튼 클릭 이벤트 처리
    drawButton.addEventListener('click', () => {
        if (menuItems.length === 0) {
            resultElement.textContent = '추가된 메뉴가 없습니다!';
            return;
        }
        const randomIndex = Math.floor(Math.random() * menuItems.length);
        const selectedMenu = menuItems[randomIndex];
        resultElement.textContent = `오늘의 저녁 메뉴는: ${selectedMenu} 입니다!`;
    });

    // 메뉴 추가 버튼 클릭 이벤트 처리
    addMenuButton.addEventListener('click', () => {
        const newMenuText = newMenuInput.value.trim();
        if (newMenuText !== '') {
            menuItems.push(newMenuText);
            updateMenuList();
            newMenuInput.value = ''; // 입력 상자 비우기
        }
    });
});
