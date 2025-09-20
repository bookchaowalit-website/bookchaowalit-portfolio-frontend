import { useTranslations } from 'next-intl';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function PrivacyPage() {
  const t = useTranslations('privacy');

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-purple-50 py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {t('title')}
          </h1>
          <p className="text-lg text-gray-600">
            {t('subtitle')}
          </p>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">{t('general.title')}</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">{t('general.effective_date')}</h3>
              <p className="text-gray-600">{t('general.date')}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">{t('general.intro_title')}</h3>
              <p className="text-gray-600">{t('general.intro_text')}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">{t('general.data_collection.title')}</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>{t('general.data_collection.website_analytics')}</li>
                <li>{t('general.data_collection.contact_info')}</li>
                <li>{t('general.data_collection.usage_data')}</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">{t('general.data_usage.title')}</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>{t('general.data_usage.improve_services')}</li>
                <li>{t('general.data_usage.respond_inquiries')}</li>
                <li>{t('general.data_usage.analytics')}</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">{t('general.contact.title')}</h3>
              <p className="text-gray-600">
                {t('general.contact.email')}: <a href="mailto:bookchaowalit@gmail.com" className="text-blue-600 hover:underline">bookchaowalit@gmail.com</a>
              </p>
              <p className="text-gray-600">
                {t('general.contact.website')}: <a href="https://bookchaowalit.com" className="text-blue-600 hover:underline">https://bookchaowalit.com</a>
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">{t('apps.title')}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-6">{t('apps.description')}</p>

            <div className="grid md:grid-cols-2 gap-4">
              <Link href="/privacy/messenger-bot">
                <Button variant="outline" className="w-full h-auto p-4 flex flex-col items-center gap-2">
                  <div className="text-lg font-semibold">{t('apps.messenger_bot.title')}</div>
                  <div className="text-sm text-gray-600 text-center">{t('apps.messenger_bot.description')}</div>
                </Button>
              </Link>

              <Link href="/privacy/web-apps">
                <Button variant="outline" className="w-full h-auto p-4 flex flex-col items-center gap-2">
                  <div className="text-lg font-semibold">{t('apps.web_apps.title')}</div>
                  <div className="text-sm text-gray-600 text-center">{t('apps.web_apps.description')}</div>
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}