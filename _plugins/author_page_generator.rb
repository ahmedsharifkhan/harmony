module Jekyll
  class AuthorPageGenerator < Generator
    def generate(site)
      authors = site.collections['authors'].docs
      authors.each do |author|
        site.pages << AuthorPage.new(site, site.source, 'author.html', author)
      end
    end
  end
end
