import { useTranslations } from 'next-intl';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function MessengerBotPrivacyPage() {
  const t = useTranslations('privacy.messenger_bot');

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-20">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <Link href="/privacy">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              {t('back_to_privacy')}
            </Button>
          </Link>

          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              {t('title')}
            </h1>
            <p className="text-lg text-gray-600">
              {t('subtitle')}
            </p>
          </div>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-xl">{t('effective_date')}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600">{t('date')}</p>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>{t('data_collection.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>{t('data_collection.messages')}</li>
                <li>{t('data_collection.user_id')}</li>
                <li>{t('data_collection.timestamp')}</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t('data_usage.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>{t('data_usage.responses')}</li>
                <li>{t('data_usage.analysis')}</li>
                <li>{t('data_usage.personalization')}</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t('data_disclosure.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{t('data_disclosure.policy')}</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>{t('data_disclosure.legal_requirement')}</li>
                <li>{t('data_disclosure.service_providers')}</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t('data_retention.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{t('data_retention.policy')}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t('user_rights.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{t('user_rights.intro')}</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>{t('user_rights.access')}</li>
                <li>{t('user_rights.correction')}</li>
                <li>{t('user_rights.deletion')}</li>
              </ul>
              <p className="text-gray-600 mt-4">
                {t('user_rights.contact')}: <a href="mailto:bookchaowalit@gmail.com" className="text-blue-600 hover:underline">bookchaowalit@gmail.com</a>
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t('data_security.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{t('data_security.policy')}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t('policy_updates.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">{t('policy_updates.policy')}</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t('contact.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-gray-600">
                <p>Bookchaowalit</p>
                <p>{t('contact.website')}: <a href="https://bookchaowalit.com" className="text-blue-600 hover:underline">https://bookchaowalit.com</a></p>
                <p>{t('contact.email')}: <a href="mailto:bookchaowalit@gmail.com" className="text-blue-600 hover:underline">bookchaowalit@gmail.com</a></p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}