import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Download, Anchor, Ship, Sword, Users, Trophy } from "lucide-react";

const Index = () => {
  const screenshots = [
    "https://play-lh.googleusercontent.com/2UNNKCuIrW0nx-ALVzT_8YucMsIAjo2loZ-ZUEV5MNLsVsAx0f3dXwYLsTU6apwy1g4L__dUmX8-l4izjqvVnQ=w526-h296-rw",
    "https://play-lh.googleusercontent.com/ok1FKVTeBl-BwCEyOKeXbhHiFwutrgYRHGmB8uq7zVF1XQwuVi_jYaYTRY0OCdJ--0dWbDHs4_NiejIvuGoq1Q=w526-h296-rw",
    "https://play-lh.googleusercontent.com/2HN6UKO2TeChaFKDUZYWdf_8EP6EZEe3km-8blqhmgYL0dw3Ekwgk2mbOMsKNvToZn2tdjkYaFY_wSUBpjHZtK8=w526-h296-rw",
    "https://play-lh.googleusercontent.com/kSQzYTLPL5sXcyEGTv_8otA90Z3otmfxCNuHKYXZrV7XkNjtJytt3NuuX8NK66SNkmB05W5ToQS5tePy-Eeq=w526-h296-rw",
    "https://play-lh.googleusercontent.com/5qhM05Fy22ENsZ9CmcMlTNyMgUTjjDfWuwKhoFJ2s3mrJ-xJUABXlwNmeL3jRDSg3hOHaHZ4KjQXmcmG-oaeTw=w526-h296-rw",
  ];

  const features = [
    { icon: Anchor, title: "أكثر من 50 نوعاً من الأسماك النادرة", color: "text-primary" },
    { icon: Ship, title: "أكثر من 20 نوعاً من السفن القابلة للترقية", color: "text-secondary" },
    { icon: Sword, title: "أسلحة ودفاعات قوية وتنين أسطوري", color: "text-accent" },
    { icon: Users, title: "معارك بحرية بين القبائل", color: "text-primary" },
    { icon: Trophy, title: "الدردشة الصوتية مع الأصدقاء", color: "text-secondary" },
  ];

  const handleInstall = () => {
    window.open("https://play.google.com/store/apps/details?id=com.hamor_era_fishing_war_game", "_blank");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-ocean-gradient py-12 md:py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <img 
              src="https://play-lh.googleusercontent.com/3I8sTfjzaOovrH3qIYoyjzgDUSPwDO33R3KsHHYoYoutiAxwiKQHjtlf3wBnWIMgxlljwoWwmIHbmNASUiGG=w240-h480-rw"
              alt="شعار عصر الهامور"
              className="mb-6 h-32 w-32 rounded-3xl shadow-2xl md:h-40 md:w-40"
            />
            <h1 className="mb-4 text-4xl font-bold text-primary-foreground md:text-6xl">
              عصر الهامور
            </h1>
            <p className="mb-6 max-w-2xl text-xl text-primary-foreground/90 md:text-2xl">
              حرب سفن و صيد
            </p>
            <div className="mb-8 flex flex-wrap justify-center gap-3">
              <Badge variant="secondary" className="px-4 py-2 text-base">
                مغامرات
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-base">
                صيد
              </Badge>
              <Badge variant="secondary" className="px-4 py-2 text-base">
                معارك بحرية
              </Badge>
            </div>
            <Button 
              size="lg" 
              onClick={handleInstall}
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-gold-glow h-14 px-10 text-lg font-bold"
            >
              <Download className="ml-2 h-6 w-6" />
              حمّل الآن من Google Play
            </Button>
          </div>
        </div>
      </section>

      {/* Screenshots Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-center text-3xl font-bold text-foreground md:text-4xl">
            صور من اللعبة
          </h2>
          <div className="overflow-x-auto pb-4">
            <div className="flex gap-4 md:grid md:grid-cols-2 lg:grid-cols-3">
              {screenshots.map((screenshot, index) => (
                <img
                  key={index}
                  src={screenshot}
                  alt={`لقطة شاشة ${index + 1}`}
                  className="h-auto w-80 flex-shrink-0 rounded-2xl shadow-lg md:w-full"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="bg-muted/50 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <Card className="mx-auto max-w-4xl border-none bg-card p-6 md:p-10">
            <h2 className="mb-6 text-center text-3xl font-bold text-foreground md:text-4xl">
              عن اللعبة
            </h2>
            <div className="space-y-4 text-right text-base leading-relaxed text-card-foreground md:text-lg">
              <p>
                اهرب من الملل وادخل إلى عالم عصر الهامور - ألعاب صيد ومغامرات ملحمية تقدم البحر والقتال والتحدي في تحفة فنية من لعبة العالم المفتوح!
              </p>
              <p>
                انطلق في مغامرة الصيد الأولى على جزيرة الهامور، لكن احذر! يكمن الأعداء، وتهاجم الوحوش، ويحاول اللصوص سرقة أسماكك الثمينة!
              </p>
              <p>
                استخدم القنابل والأسلحة والتنين الأسطوري لحماية سفينتك وتحقيق السيطرة على البحر!
              </p>
              <p className="font-semibold text-primary">
                شكّل القبائل، وقاتل الأعداء في حروب بحرية مذهلة، وتفاعل مع أصدقائك عبر الدردشة الصوتية أثناء المعارك المباشرة في الساحة!
              </p>
            </div>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-10 text-center text-3xl font-bold text-foreground md:text-4xl">
            ⚓ مميزات عصر الهامور
          </h2>
          <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index} className="border-border/50 bg-card p-6 text-center transition-all hover:shadow-ocean-glow">
                <feature.icon className={`mx-auto mb-4 h-12 w-12 ${feature.color}`} />
                <p className="text-base font-semibold text-card-foreground md:text-lg">
                  {feature.title}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-sunset-gradient py-12 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold text-secondary-foreground md:text-4xl">
            هل أنت مستعد لتصبح هامور حقيقي؟ ⚔️🐉
          </h2>
          <p className="mb-8 text-xl text-secondary-foreground/90">
            حمّل اللعبة الآن وابدأ مغامرتك البحرية!
          </p>
          <Button 
            size="lg"
            onClick={handleInstall}
            className="bg-card hover:bg-card/90 text-card-foreground shadow-xl h-14 px-10 text-lg font-bold"
          >
            <Download className="ml-2 h-6 w-6" />
            تحميل مجاني
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-muted-foreground md:text-base">
            تطوير <span className="font-semibold text-foreground">Zr3a Games</span>
          </p>
          <p className="mt-2 text-xs text-muted-foreground">
            آخر تحديث: نوفمبر 2025
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
