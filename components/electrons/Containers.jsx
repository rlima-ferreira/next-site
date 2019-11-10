import styled from 'styled-components';

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Page = styled.main`
  display: flex;
	flex-direction: column;
	height: 100%;
	width: 100%;
`;

export const Grid = styled.section`
  flex: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Article = styled.article`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

export const Form = styled.form`
  flex: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Row = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const Col = styled.div`
	flex-grow: 1;
	
	@media only screen and (min-width: 0px) {
		${({ xs }) => xs && `width: calc(100%/(12/${xs}))`};
	}
	@media only screen and (min-width: 768px) {
		${({ md }) => md && `width: calc(100%/(12/${md}))`};
	}
	@media only screen and (min-width: 1000px) {
		${({ lg }) => lg && `width: calc(100%/(12/${lg}))`};
	}
	@media only screen and (min-width: 1300px) {
		${({ xl }) => xl && `width: calc(100%/(12/${xl}))`};
	}
`;
