"use strict";(self.webpackChunk_metamask_sdk_ui=self.webpackChunk_metamask_sdk_ui||[]).push([[9813],{"./src/design-system/components/Badges/BadgeWrapper/README.md":module=>{module.exports='# BadgeWrapper\n\nBadgeWrapper is a wrapper component that attaches a [Badge](./Badge/Badge.tsx) on top of any component.\n\n## Props\n\nThis component extends `ViewProps` from React Native\'s [View](https://reactnative.dev/docs/view) component.\n\n### `anchorElementShape`\n\nOptional prop to control the shape of the element the badge will anchor to.\n\n| <span style="color:gray;font-size:14px">TYPE</span> | <span style="color:gray;font-size:14px">REQUIRED</span> | <span style="color:gray;font-size:14px">DEFAULT</span> |\n| :-------------------------------------------------- | :------------------------------------------------------ | :----------------------------------------------------- |\n| [BadgeAnchorElementShape](./BadgeWrapper.types.ts)  | No                                                      | Disconnected                                           |\n\n### `badgePosition`\n\nOptional prop to control the position of the badge.\n\n| <span style="color:gray;font-size:14px">TYPE</span> | <span style="color:gray;font-size:14px">REQUIRED</span> | <span style="color:gray;font-size:14px">DEFAULT</span> |\n| :-------------------------------------------------- | :------------------------------------------------------ | :----------------------------------------------------- |\n| [BadgePosition](./BadgeWrapper.types.ts)            | No                                                      | TopRight                                               |\n\n### `children`\n\nThe children element that the badge will attach itself to.\n\n| <span style="color:gray;font-size:14px">TYPE</span> | <span style="color:gray;font-size:14px">REQUIRED</span> |\n| :-------------------------------------------------- | :------------------------------------------------------ |\n| React.ReactNode                                     | Yes                                                     |\n\n### `badgeElement`\n\nAny element that will be placed in the position of the badge.\n\n| <span style="color:gray;font-size:14px">TYPE</span> | <span style="color:gray;font-size:14px">REQUIRED</span> |\n| :-------------------------------------------------- | :------------------------------------------------------ |\n| React.ReactNode                                     | Yes                                                     |\n\n## Usage\n\n```javascript\n<BadgeWrapper\n  anchorElementShape={BadgeAnchorElementShape.Circular}\n  badgePosition={BadgePosition.TopRight}\n  badge={SAMPLE_BADGE_ELEMENT}\n>\n  <View />\n</BadgeWrapper>\n```\n'}}]);