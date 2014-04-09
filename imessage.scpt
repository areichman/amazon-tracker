on run argv
  tell application "Messages"
    send item 1 of argv to buddy "+19875551234" of service "E:me@icloud.com"
  end tell
end run

