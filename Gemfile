source "https://rubygems.org"

gem "webrick", "~> 1.8"


gem "jekyll-admin"





gem "jekyll", "4.3.2"
gem "minima", "~> 2.5"


# group :jekyll_plugins do
#   gem "jekyll-feed", "~> 0.12"
# end

# ./Gemfile

group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  gem "jekyll-seo-tag", "~> 2.6"
end

group :jekyll_plugins do
  gem "jekyll-youtube"
end

platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

# Lock `http_parser.rb` gem to `v0.6.x` on JRuby builds since newer versions of the gem
# do not have a Java counterpart.
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]

gem "webrick", "~> 1.8"
