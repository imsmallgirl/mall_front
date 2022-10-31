import styled from 'styled-components';

const BannerWrap = styled.div`
    width: 100%;
    height: 800px;
    background-color: #fff;
`;

const BannerUl = styled.ul`
    display: flex;
`

const BannerLi = styled.li`

`


function MainContents () {
    return (
            <BannerWrap>
                <BannerUl>
                    <BannerLi></BannerLi>
                    <BannerLi></BannerLi>
                    <BannerLi></BannerLi>
                    <BannerLi></BannerLi>
                    <BannerLi></BannerLi>
                </BannerUl>
            </BannerWrap>
    )
}

export default MainContents;