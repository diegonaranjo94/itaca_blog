# Use the official Ghost base image
FROM ghost:6-alpine

# Set working directory inside container
WORKDIR /var/lib/ghost

# Copy your Ghost content (themes, images, config, etc.)
# Assuming you have a `content/` folder in your project
COPY ./content ./content

# Expose Ghost default port
EXPOSE 2368

# Start Ghost
CMD ["node", "current/index.js"]