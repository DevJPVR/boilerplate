import * as S from './styles'

const Main = () => {
  return (
    <S.Wrapper>
      <S.Logo src="/img/logo.svg" alt="Imagem de um átomo" />
      <S.Title>React Avançado</S.Title>
      <S.Description>
        Typescript, ReactJS, NextJS e Styled Components
      </S.Description>
      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="Desenvolvedor em frente para a tela codando"
      />
    </S.Wrapper>
  )
}

export default Main
