/**
 * README.
 *
 * @description Create readme parts.
 */
import {
	imgUrl, joinUrl, 
}   from '../core/main.mjs'
import { collectiveImgLInks } from './links.mjs'
import { mark }               from './mark.mjs'

export const org = pkg => {

	const fundingURL = pkg.data.funding.url
	return `## 👨‍💻 Development

**${pkg.data.name.toUpperCase()}** is an open-source project and its development is open to anyone who wants to participate.

[![Issues](https://img.shields.io/badge/Issues-grey?style=for-the-badge)](${joinUrl( pkg.data.repository.url, '/issues' )})
[![Pull requests](https://img.shields.io/badge/Pulls-grey?style=for-the-badge)](${joinUrl( pkg.data.repository.url, '/pulls' )})
[![Read more](https://img.shields.io/badge/Read%20more-grey?style=for-the-badge)](${pkg.data.homepage})

## ☕ Donate

Help us to develop more interesting things.

[![Donate](https://img.shields.io/badge/Donate-grey?style=for-the-badge)](${fundingURL})

## 📜 License

This software is licensed with **[${pkg.data.license}](/LICENSE)**.

[![Read more](https://img.shields.io/badge/Read-more-grey?style=for-the-badge)](/LICENSE)

## 🐦 About us

*${pkg.data.extra.collective.name}* is a ✨ **code development collective** ✨ focused on creating practical and interesting tools that help developers and users enjoy a more agile and comfortable experience. Our projects cover various programming sectors and we do not have a thematic limitation in terms of projects.

[![More](https://img.shields.io/badge/Read-more-grey?style=for-the-badge)](${pkg.data.extra.collective.gh})

### Collaborators

|                                                                                    | Name        | Role         | GitHub                                         |
| ---------------------------------------------------------------------------------- | ----------- | ------------ | ---------------------------------------------- |
| <img src="${pkg.data.author.url}.png?size=72" alt="${pkg.data.author.name}" style="border-radius:100%"/> | ${pkg.data.author.name} |   Idea & Development & UI Design   | [@${pkg.data.author.name}](${pkg.data.author.url}) |
| <img src="${pkg.data.contributors[0].url}.png?size=72" alt="${pkg.data.contributors[0].name}" style="border-radius:100%"/> | ${pkg.data.contributors[0].name} |  Idea & UI Concept   | [@${pkg.data.contributors[0].name}](${pkg.data.contributors[0].url}) |
| <img src="https://github.com/${pkg.data.extra.collective.name}.png?size=72" alt="${pkg.data.extra.collective.name}" style="border-radius:100%"/> | ${pkg.data.extra.collective.name} | Collective | [@${pkg.data.extra.collective.name}](https://github.com/${pkg.data.extra.collective.name}) |

<br>
<p align="center">

${collectiveImgLInks( pkg )}

</p>`

}

const markFunct = pkg => {

	return `<!--\n${mark( pkg )}\n-->`

}
const header    = pkg => {

	return `
[![HEADER](${joinUrl( pkg.data.extra.rawRepoUrl, '/main/docs/images/banner.png' )})](${pkg.data.homepage})

${collectiveImgLInks( pkg )}

${
	imgUrl( {
		name  : 'License', 
		color : 'green', 
		type  : `github/license/${pkg.data.extra.collective.id}/${pkg.data.name}`,
		url   : '/LICENSE',
	} )
}
${
	imgUrl( {
		name  : 'Core', 
		color : 'blue', 
		type  : `npm/v/${pkg.data.extra.libraryId}`,
		url   : pkg.data.extra.libraryUrl,
	} )
}
${
	imgUrl( {
		name  : 'Version', 
		color : 'blue', 
		type  : `github/package-json/v/${pkg.data.extra.repoId}?filename=packages%2Fapp%2Fpackage.json`,
		url   : pkg.data.homepage,
	} )
}

${
	imgUrl( {
		name  : 'Chrome', 
		color : 'blue', 
		type  : `chrome-web-store/v/${pkg.data.extra.downloadUrl.chrome.storeId}`,
		url   : pkg.data.extra.downloadUrl.chrome.url,
	} )
}
${
	imgUrl( {
		name  : 'Mozilla', 
		color : 'blue', 
		type  : `amo/v/${pkg.data.extra.downloadUrl.firefox.storeId}`,
		url   : pkg.data.extra.downloadUrl.firefox.url,
	} )
}
${
	imgUrl( { 
		name  : 'Edge', 
		color : 'blue',
		type  : `badge/dynamic/json?label=microsoft%20edge%20store&query=%24.version&url=https://microsoftedge.microsoft.com/addons/getproductdetailsbycrxid/${pkg.data.extra.downloadUrl.edge.storeId}`, 
		url   : pkg.data.extra.downloadUrl.edge.url,
	} )
}`

}

const index = pkg => {

	return `## Index

- [Documentation](${pkg.data.extra.docsUrl})
- [Web version](${pkg.data.homepage})
`

}

const content = pkg => {

	return `## 🗒 Description

${pkg.data.description}

[![DEMO](${joinUrl( pkg.data.extra.rawRepoUrl, '/main/docs/images/demo-filters.gif' )})](${pkg.data.homepage})`

}

export const readme = pkg => {

	return {
		mark    : markFunct( pkg ),
		header  : header( pkg ),
		index   : index( pkg ),
		content : content( pkg ),
		org     : org( pkg ),
	}

}
