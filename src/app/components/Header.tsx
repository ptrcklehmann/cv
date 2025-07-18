import { GlobeIcon, MailIcon, PhoneIcon } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { RESUME_DATA } from "@/data/resume-data";

interface LocationLinkProps {
  location: typeof RESUME_DATA.location;
  locationLink: typeof RESUME_DATA.locationLink;
}

function LocationLink({ location, locationLink }: LocationLinkProps) {
  return (
    <p className="mt-3 max-w-md items-center text-pretty text-xs text-foreground">
      <a
        className="inline-flex gap-x-1.5 align-baseline  font-mono leading-none hover:underline"
        href={locationLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Location: ${location}`}
      >
        <GlobeIcon className="size-3" aria-hidden="true" />
        {location}
      </a>
    </p>
  );
}

interface SocialButtonProps {
  href: string;
  icon: React.ElementType;
  label: string;
}

function SocialButton({ href, icon: Icon, label }: SocialButtonProps) {
  return (
      <div role="listitem">
          <Tooltip>
              <TooltipTrigger>
                  <Button className="size-8" variant="outline" size="icon" asChild>
                      <a href={href} aria-label={label} target="_blank" rel="noopener noreferrer">
                          <Icon className="size-4" aria-hidden="true" />
                      </a>
                  </Button>
              </TooltipTrigger>
              <TooltipContent>
                  <p>{label}</p>
              </TooltipContent>
          </Tooltip>
      </div>
  );
}

interface ContactButtonsProps {
  contact: typeof RESUME_DATA.contact;
  personalWebsiteUrl?: string;
}

function ContactButtons({ contact, personalWebsiteUrl }: ContactButtonsProps) {
  return (
    <div
      className="flex gap-x-1 pt-1 font-mono text-sm text-foreground/80 print:hidden"
      role="list"
      aria-label="Contact links"
    >
      {personalWebsiteUrl && (
        <SocialButton
          href={personalWebsiteUrl}
          icon={GlobeIcon}
          label="Personal website"
        />
      )}
      {contact.email && (
        <SocialButton
          href={`mailto:${contact.email}`}
          icon={MailIcon}
          label="Email"
        />
      )}
      {contact.tel && (
        <SocialButton
          href={`tel:${contact.tel}`}
          icon={PhoneIcon}
          label="Phone"
        />
      )}
      {contact.social.map((social) => (
        <SocialButton
          key={social.name}
          href={social.url}
          icon={social.icon}
          label={social.name}
        />
      ))}
    </div>
  );
}

interface PrintContactProps {
  contact: typeof RESUME_DATA.contact;
  personalWebsiteUrl?: string;
}

function PrintContact({ contact, personalWebsiteUrl }: PrintContactProps) {
  return (
    <div
      className="hidden gap-x-2 font-mono text-sm text-foreground/80 print:flex print:text-[12px]"
      aria-label="Print contact information"
    >
      {personalWebsiteUrl && (
        <>
          <a
            className="underline hover:text-foreground/70"
            href={personalWebsiteUrl}
          >
            {new URL(personalWebsiteUrl).hostname}
          </a>
          <span aria-hidden="true">/</span>
        </>
      )}
      {contact.email && (
        <>
          <a
            className="underline hover:text-foreground/70"
            href={`mailto:${contact.email}`}
          >
            {contact.email}
          </a>
          <span aria-hidden="true">/</span>
        </>
      )}
      {contact.tel && (
        <a
          className="underline hover:text-foreground/70"
          href={`tel:${contact.tel}`}
        >
          {contact.tel}
        </a>
      )}
    </div>
  );
}

/**
 * Header component displaying personal information and contact details
 */
export function Header() {
  return (
      <header role="banner" className="flex items-center justify-between">
          <div className="flex-1">
              <h1
                  className="text-muted-foreground my-0! text-3xl/none font-bold uppercase"
                  id="resume-name"
              >
                  {RESUME_DATA.name}
              </h1>
              <p
                  className="text-muted-foreground max-w-md text-sm text-pretty print:text-[12px]"
                  aria-labelledby="resume-name"
              >
                  {RESUME_DATA.about}
              </p>

              <LocationLink
                  location={RESUME_DATA.location}
                  locationLink={RESUME_DATA.locationLink}
              />

              <ContactButtons
                  contact={RESUME_DATA.contact}
                  personalWebsiteUrl={RESUME_DATA.personalWebsiteUrl}
              />

              <PrintContact
                  contact={RESUME_DATA.contact}
                  personalWebsiteUrl={RESUME_DATA.personalWebsiteUrl}
              />
          </div>

          <Avatar className="size-28" aria-hidden="true">
              <AvatarImage
                  alt={`${RESUME_DATA.name}'s profile picture`}
                  src={RESUME_DATA.avatarUrl}
              />
              <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
          </Avatar>
      </header>
  );
}
