import { Metadata } from 'next';
import { useTranslations } from 'next-intl';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  const seoTitles = {
    en: "Web Applications Privacy Policy - Chaowalit Greepoke | App Data Protection",
    th: "นโยบายความเป็นส่วนตัวสำหรับเว็บแอปพลิเคชัน - เชาวลิต กรีโภค | การปกป้องข้อมูลแอป"
  };

  const seoDescriptions = {
    en: "Privacy policy for web-based applications and services. Learn about data collection, cookies, user rights, and security measures in our web applications.",
    th: "นโยบายความเป็นส่วนตัวสำหรับเว็บแอปพลิเคชันและบริการ เรียนรู้เกี่ยวกับการเก็บข้อมูล cookies สิทธิของผู้ใช้ และมาตรการรักษาความปลอดภัยในเว็บแอปพลิเคชันของเรา"
  };

  return {
    title: seoTitles[locale as keyof typeof seoTitles] || seoTitles.en,
    description: seoDescriptions[locale as keyof typeof seoDescriptions] || seoDescriptions.en,
    robots: 'index, follow',
    alternates: {
      canonical: `/${locale}/privacy/web-apps`,
      languages: {
        'en': '/en/privacy/web-apps',
        'th': '/th/privacy/web-apps',
        'x-default': '/en/privacy/web-apps'
      }
    },
  };
}

export default function WebAppsPrivacyPage() {
  const t = useTranslations('privacy.web_apps');

  return (
    <div className="min-h-screen bg-background py-20">
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
                <li>{t('data_collection.usage_analytics')}</li>
                <li>{t('data_collection.form_data')}</li>
                <li>{t('data_collection.cookies')}</li>
                <li>{t('data_collection.device_info')}</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t('data_usage.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>{t('data_usage.app_functionality')}</li>
                <li>{t('data_usage.user_experience')}</li>
                <li>{t('data_usage.analytics')}</li>
                <li>{t('data_usage.support')}</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t('cookies.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{t('cookies.description')}</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>{t('cookies.essential')}</li>
                <li>{t('cookies.analytics')}</li>
                <li>{t('cookies.preferences')}</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>{t('third_party.title')}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">{t('third_party.description')}</p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>{t('third_party.analytics_services')}</li>
                <li>{t('third_party.hosting_providers')}</li>
                <li>{t('third_party.payment_processors')}</li>
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
                <li>{t('user_rights.portability')}</li>
                <li>{t('user_rights.objection')}</li>
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
