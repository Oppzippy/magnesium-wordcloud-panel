# Changes from original
Instead of providing a table of words and counts to the panel, only words need to be provided. The words will then be split with a delimiter of " " and counted.


[![CI](https://github.com/raulsperoni/magnesium-wordcloud-panel/actions/workflows/ci.yml/badge.svg)](https://github.com/raulsperoni/magnesium-wordcloud-panel/actions/workflows/ci.yml)
[![Release](https://github.com/raulsperoni/magnesium-wordcloud-panel/actions/workflows/release.yml/badge.svg)](https://github.com/raulsperoni/magnesium-wordcloud-panel/actions/workflows/release.yml)
[![Marketplace](https://img.shields.io/badge/dynamic/json?logo=grafana&color=F47A20&label=marketplace&prefix=v&query=%24.items%5B%3F%28%40.slug%20%3D%3D%20%22magnesium-wordcloud-panel%22%29%5D.version&url=https%3A%2F%2Fgrafana.com%2Fapi%2Fplugins)](https://grafana.com/grafana/plugins/magnesium-wordcloud-panel)
[![Downloads](https://img.shields.io/badge/dynamic/json?logo=grafana&color=F47A20&label=downloads&query=%24.items%5B%3F%28%40.slug%20%3D%3D%20%22magnesium-wordcloud-panel%22%29%5D.downloads&url=https%3A%2F%2Fgrafana.com%2Fapi%2Fplugins)](https://grafana.com/grafana/plugins/magnesium-wordcloud-panel)


# ☁️ WordCloud Panel Plugin

This is a Wordcloud/Tagcloud panel for Grafana 7.0+, using the amazing library [react-wordcloud](https://github.com/chrisrzhou/react-wordcloud)

This was boostraped using the new @grafana/toolkit

![Screenshot with query](https://raw.githubusercontent.com/raulsperoni/magnesium-wordcloud-panel/master/src/img/wordcloud-screenshot-query.png)


## Features

You can find features and personalization options [here](https://react-wordcloud.netlify.com/)

## Usage

You need to configure a datasource so that the query returns a list of tokens and group the result by terms.
You should change the names of word, and count fields in the options tab of the plugin according to your query, if you don't default fields with matching types present in your query will be used.
The amount of words is configured in the datasource settings. In those settings is also important that you choose "Order by: Doc Count".

Every other settings for the wordcloud can be changed in the plugin options tab.

## ToDo

It would be really nice to use the library's available callbacks to filter grafana dashboard data when a word is clicked. I haven't found a neat way to do this yet. [Issue #5](https://github.com/raulsperoni/magnesium-wordcloud-panel/issues/5)

## Release to Grafana plugins repo

Push tag v($version_number) and github actions will do it!
