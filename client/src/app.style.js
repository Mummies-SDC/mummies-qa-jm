import styled from 'styled-components';
import ProductsOverview from './overview/productsOverview/productsOverview.jsx';
import Reviews from './reviews/Reviews.jsx';
import WriteReview from './reviews/WriteReview.jsx';
import RelatedProductList from './related_comparison/relatedProductList.jsx';
import OutfitList from './related_comparison/outfitList.jsx';

export const Container = styled.section`
  left: 0;
  display: flex;
  height: 100%;
  flex-direction: column;
  // flex-wrap: wrap;
  width:100%;
  font-family: 'Roboto Condensed', sans-serif;
`;

export const Header = styled.header`
  padding-left: 20px;
  top: 0;
  left: 0;
  position: fixed;
  background: lightgrey;
  width: 100vw;
  padding-top: 10px;
  height: 90px;

`;

export const OverviewContainer = styled(ProductsOverview)`
  left:0;
  width: 100%;
  display: flex;
  flex-direction: column;
  background: white;

`;

// export const SectionBreakOne = styled.div`
//   flex-basis: 100%
//   height: 0;
// `;

export const RelatedProductListContainer = styled(RelatedProductList)`

  width: 100%;
  display: flex;
  flex-direction: column;
  background: white;

`;

export const OutfitListContainer = styled(OutfitList)`

  width: 100%;
  display: flex;
  flex-direction: column;
  background: white;

`;

export const ReviewsContainer = styled(Reviews)`

  width: 100vw;
  padding: 20px;
  display: flex;
  flex-direction: column;
  background: white;
  flex: 1;
`;

export const WriteReviewContainer = styled(WriteReview)`

  width: 100vw;
  padding: 20px;
  display: flex;
  flex-direction: row;
  background: white;
  flex: 1;
`;

export const QuestionsContainer = styled.section`

  width: 100vw;
  padding: 20px;
  display: flex;
  flex-direction: row;
  background: white;
`;

export const Footer = styled.footer`
 flex:none;
 left: 0;
 bottom: 0;
 position: fixed;
 background: lightgrey;
 width: 100vw;
 padding: 10px;
`;
