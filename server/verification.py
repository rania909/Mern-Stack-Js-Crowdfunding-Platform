import cv2
import numpy as np
import sys
first = sys.argv[1]

original = cv2.imread("images/original_golden_bridge.jpg")
image_to_compare = cv2.imread("C:/pi/Codev/client/public/assets/img/project/"+first)


# 1) Check if 2 images are equals


# 2) Check for similarities between the 2 images
sift = cv2.xfeatures2d.SIFT_create()
kp_1, desc_1 = sift.detectAndCompute(original, None)
kp_2, desc_2 = sift.detectAndCompute(image_to_compare, None)

index_params = dict(algorithm=0, trees=5)
search_params = dict()
flann = cv2.FlannBasedMatcher(index_params, search_params)

matches = flann.knnMatch(desc_1, desc_2, k=2)

good_points = []
for m, n in matches:
    if m.distance < 0.6*n.distance:
        good_points.append(m)

# Define how similar they are
number_keypoints = 0
if len(kp_1) <= len(kp_2):
    number_keypoints = len(kp_1)
else:
    number_keypoints = len(kp_2)


#print("Keypoints 1ST Image: " + str(len(kp_1)))
#print("Keypoints 2ND Image: " + str(len(kp_2)))
#print("GOOD Matches:", len(good_points))
r=(len(good_points) / number_keypoints * 100)

if ( r > 50):
    print("1")
else:
    print("0")

result = cv2.drawMatches(original, kp_1, image_to_compare, kp_2, good_points, None)


#cv2.imshow("result", cv2.resize(result, None, fx=0.4, fy=0.4))
#cv2.imwrite("feature_matching.jpg", result)


#cv2.imshow("Original", cv2.resize(original, None, fx=0.4, fy=0.4))
#cv2.imshow("Duplicate", cv2.resize(image_to_compare, None, fx=0.4, fy=0.4))
cv2.waitKey(0)
cv2.destroyAllWindows()