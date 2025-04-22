import "./App.css";

import Header from "./components/Header"; // Header 컴포넌트 분리해서 모듈화
import Main from "./components/Main";
import Footer from "./components/Footer";

// 함수선언식이나 화살표 함수나 동일하게 컴포넌트 생성
// 컴포넌트를 생성하는 함수의 이름의 첫글자는 반드시 대문자여야 함
// 다른 컴포넌트의 리턴문 내부 포함되는 컴포넌트 = 자식 컴포넌트
/*const Header = () => {
    return (
        <header>
            <h1>header</h1>
        </header>
    );
};*/

// App 함수는 html 태그를 리턴하기 때문에 컴포넌트로 봄
// 부모 컴포넌트
// 여기서는 App 컴포넌트가 최상위 컴포넌트라서 root 컴포넌트임
function App() {
    // html 태그 작성하듯이 Header 컴포넌트 배치 -> App 컴포넌트가 화면에 렌더링될 때 Header의 반환값을 함께 렌더링
    return (
        <>
            <Header />
            <Main />
            <Footer />
        </>
    );
}
export default App;
