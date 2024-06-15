import RolesAndDescrptions from "~/components/RolesAndDescrptions/RolesAndDescrptions";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/components/ui/dialog";
export default function careers() {
  return (
    <main className="content-container space-y-8">
      <section className="flex md:gap-4 gap-2 flex-col pt-20">
        <h2
          className="text-gray-900 text-left heading w-fit"
          style={{ textTransform: "capitalize" }}
        >
          Want to work with us?
          <div className="h-1 w-full bg-secondary-500 rounded-full mt-2"></div>
        </h2>
        <p className="body">
          We are pleased to announce the upcoming launch of <span className="font-bold">&#34;KRISHNAVENI AYURVEDA
          - Treatment and Wellness Center&#34;</span> and invite applications for the
          following positions .Join our dynamic team where innovation meets
          opportunity. Were dedicated to fostering a collaborative and inclusive
          environment that encourages growth, creativity, and the pursuit of
          excellence. If youre passionate about making a difference and looking
          for a place to develop your skills, wed love to hear from you. Lets
          build something great together!encourages growth, creativity, and the
          pursuit of excellence.
          <Dialog>
            <DialogTrigger className="underline gap-3 text-blue-500">
              want to know how to apply?
            </DialogTrigger>
            <DialogContent className="bg-primary-100">
              <DialogHeader>
                <DialogTitle className="heading  ">How to Apply</DialogTitle>
                <DialogDescription className="text-gray-400  font-bold ">
                  Interested candidates can send their applications via email to
                  info@kvdhama.com or mail to Administrative Officer, Inchara,
                  No.: 2-190, Salmara, Shankarapura Post – 574115, Udupi.
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </p>
      </section>
      <div className="flex flex-col md:gap-12 gap-6">
        <h2 className="heading w-fit">
          Roles And Their Descrptions
          <div className="h-1 w-full mt-2 bg-secondary-500 rounded-full"></div>
        </h2>
        <RolesAndDescrptions />
      </div>
    </main>
  );
}
