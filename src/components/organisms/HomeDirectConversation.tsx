import { Button } from "../ui/button"

function HomeDirectConversation() {
  return (
    <div className="bg-primary flex items-center w-full px-2 py-8 shadow-2xl">
      <div className="w-5/6 mx-auto flex items-center justify-between">
        <Button className="bg-white text-primary text-lg px-8 py-6">
          المحادثة المباشرة
        </Button>
        <div className="flex flex-col items-end">
          <h1
            className="text-3xl text-white font-bold text-right mb-2"
            dir="rtl"
          >
            هل بقي لك القليل لتقتنع ان كرزون شات هو ما تحتاجه ؟ دعنا نقطع الشك
            باليقين
          </h1>
          <p
            className="text-lg text-gray-100 font-semibold text-right"
            dir="rtl"
          >
            احجز مكالمة مع احد المختصين لنجيب على جميع استفساراتك
          </p>
        </div>
      </div>
    </div>
  )
}

export default HomeDirectConversation
