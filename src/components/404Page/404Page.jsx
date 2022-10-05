import { NotFoundPageSection, GoHomeButton, NotFoundPageText } from './404Page.styled'

const NotFoundPage = () => {

    return (
<>
<NotFoundPageSection>
<NotFoundPageText>404</NotFoundPageText>
    <NotFoundPageText>Not found page</NotFoundPageText>
    <GoHomeButton to="/">Home</GoHomeButton>
</NotFoundPageSection>
</>
    )
}
export default NotFoundPage;