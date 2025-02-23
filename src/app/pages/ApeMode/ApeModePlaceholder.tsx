import { useTranslation } from 'react-i18next';
import { useNavigate } from 'app/hooks/Routing';
import { PlaceholderScreen } from 'app/components/PlaceholderScreen';
import { ReactComponent as ApeModeImage } from 'app/assets/apemode/wip.svg';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { HOME } from 'app/router/routes';

const ApeModePlaceholder = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();
  const pageTitle = `${t('common.name')} - ${t('common.menu.apemode')}`;

  const props = {
    Image: () => <ApeModeImage />,
    title: t('apeMode.wip.title'),
    text: t('apeMode.wip.text'),
    buttons: [
      {
        type: 'secondary',
        label: t('apeMode.wip.buttons.back'),
        action: () => navigate(HOME.path),
      },
    ],
  };

  return (
    <>
      <HelmetProvider>
        <Helmet>
          <title>{pageTitle}</title>
          <meta name="inSPIRIT" content="inSPIRIT" />
        </Helmet>
      </HelmetProvider>
      <PlaceholderScreen {...props} />
    </>
  );
};

export default ApeModePlaceholder;
