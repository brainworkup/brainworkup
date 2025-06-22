-- fix-relative-links.lua
-- This filter corrects relative links within Quarto documents

function Link(el)
  -- Check if this is a relative link to contact/index.qmd or other problematic paths
  if el.target:match("contact/index.qmd$") and not el.target:match("^/") then
    -- Replace with absolute path
    el.target = "/contact/index.html"
    return el
  end

  -- Fix other common patterns that might cause problems
  if el.target:match("%.qmd$") and not el.target:match("^/") and not el.target:match("^https?://") then
    -- Extract the filename without directory
    local filename = el.target:match("([^/]+)%.qmd$")
    if filename then
      -- Check if it's a subdirectory reference
      if el.target:match("/") then
        -- Convert to absolute path
        local directory = el.target:match("(.+)/[^/]+%.qmd$")
        if directory then
          el.target = "/" .. directory .. "/" .. filename .. ".html"
        end
      else
        -- Local file reference
        el.target = "/" .. filename .. ".html"
      end
    end
  end

  return el
end
