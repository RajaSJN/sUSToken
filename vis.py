import cv2 as cv
vid = cv.VideoCapture(0)
while(True):
    ret, frame = vid.read()
    cv.imshow("Frame",frame)
    if cv.waitKey(1) & 0xFF == ord('q'):
        break
vid.release()
# Destroy all the windows
cv.destroyAllWindows()