"use client";

import { DiscussionEmbed } from "disqus-react";

type Props = {
  url: string;
  title: string;
};

export default function DisqusLibrary({ url, title }: Props) {
    return <DiscussionEmbed
        shortname='gateraid'
        config={
            {
                url: ``,
                identifier: url,
                title: title,
                language: 'id' //e.g. for Traditional Chinese (Taiwan)
            }
        }
    />;
}
