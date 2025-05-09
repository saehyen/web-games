document.addEventListener('DOMContentLoaded', () => {
    const resultElement = document.getElementById('result');
    const drawButton = document.getElementById('drawButton');
    const newMenuInput = document.getElementById('newMenu');
    const addMenuButton = document.getElementById('addMenuButton');
    const menuListElement = document.getElementById('menuList');
    let menuItems = [
        // 치킨
        '후라이드 치킨',
        '양념 치킨',
        '간장 치킨',
        '마늘 치킨',
        '순살 치킨',
        '로스트 치킨',
        '바베큐 치킨',

        // 피자
        '페퍼로니 피자',
        '고구마 피자',
        '불고기 피자',
        '포테이토 피자',
        '콤비네이션 피자',
        '쉬림프 피자',
        '하와이안 피자',

        // 한식
        '김치찌개',
        '된장찌개',
        '비빔밥',
        '불고기',
        '제육볶음',
        '닭갈비',
        '삼겹살 (배달)',
        '갈비찜',
        '육개장',

        // 중식
        '짜장면',
        '짬뽕',
        '탕수육',
        '볶음밥',
        '깐풍기',
        '마라탕',
        '마라샹궈',

        // 일식/돈까스
        '돈까스',
        '치즈 돈까스',
        '회 (모듬)',
        '초밥 (모듬)',
        '우동',
        '라멘',
        '덮밥 (가츠동/사케동 등)',

        // 분식
        '떡볶이',
        '순대',
        '튀김 (모듬)',
        '김밥',
        '라면',
        '쫄면',

        // 찜/탕/찌개
        '닭볶음탕',
        '해물찜',
        '아구찜',
        '부대찌개',
        '갈비탕',

        // 패스트푸드
        '햄버거 세트',
        '치킨버거 세트',
        '감자튀김',
        '치즈스틱',

        // 카페/디저트
        '커피',
        '케이크',
        '빙수',
        '와플',
        '마카롱',

        // 샐러드
        '닭가슴살 샐러드',
        '리코타치즈 샐러드',
        '연어 샐러드',

        // 야식
        '족발',
        '보쌈',
        '닭꼬치',
        '오돌뼈',

        // 기타 (배달의 민족 카테고리에 있을 수 있는 항목)
        '도시락',
        '샌드위치',
        '브런치'
    ]; // 배달의 민족 카테고리 기반 메뉴 목록

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
